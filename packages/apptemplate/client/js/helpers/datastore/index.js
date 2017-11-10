import _ from "lodash";
import {
  extendObservable,
  observable,
  action,
  isObservable,
  toJS,
  autorun
} from "mobx";
import { Type, types, onPatch, applyPatch } from "mobx-state-tree";
import Promise from "bluebird";
import R from "ramda";

window.toJS = toJS;
let getItemsModel = async function(DS) {
  let defaultitem = await getDefaultNewItem(this.schema);
  return _.map(DS, (value, key) => {
    let item = types.model("item", defaultitem).create(value);
    applyOnPatch.call(this, item);
    return item;
  });
},
  getDefaultNewItem = async function(schema) {
    let { properties, events } = schema;
    let item = {};
    _.forOwn(properties, function(value, key) {
      item[key] = value.defaultVal;
    });
    return await events.onNew(item);
  },
  applyOnPatch = function(item) {
    onPatch(item, data => {
      let fieldKey = data.path;
      let change = {
        update: {
          itemKey: this.itemKey,
          fieldKey,
          value: data.value
        }
      };
      this.changeQueue.push(change);
    });
  };

class Iterator {
  constructor(DS, item_Key) {
    extendObservable(this, {
      first: action(function() {
        this.reset();
        return this.next();
      }),
      getSelected: action(function() {
        if (this.index == -1) throw "No item selected";
        return { key: this.itemKey, item: this.item };
      }),
      hasPrev: action(function() {
        return this.index > 0;
      }),
      reset: action(function() {
        this.init(this.items);
      })
    });
  }
}

class List extends Iterator {
  constructor(DS, schema, item_Key) {
    super(DS, item_Key);
    //===Auto update
    this.changeQueue = observable.array();
    autorun(() => {
      console.log(this.changeQueue.length);
      let isAuto = this.schema ? this.schema.auto : false;
      if (isAuto) {
        this.update();
      }
    });
    //----------Observable Object
    extendObservable(this, {
      items: [],
      index: null,
      itemKey: null,
      item: {},
      newItem: {},
      schema: {},
      isList: action(function() {
        return true;
      }),
      init: action(async function(Adapter, schema, item_Key) {
        let DS = await Adapter.init();
        this.Adapter = Adapter;
        this.schema = schema;
        this.items = await getItemsModel.call(this, DS);
        this.newItem = await getDefaultNewItem(schema);
        this.index = item_Key != "" && item_Key != null ? item_Key : 0;
        this.itemKey = this.index;
        this.item = this.items[this.itemKey];
      }),
      getByKey: action(function(item_Key) {
        if (item_Key >= 0 && item_Key < this.items.length)
          return this.items[item_Key];
        throw "Specified key is not present in dataStore";
      }),
      next: action(function() {
        if (!this.hasNext()) throw "Data store has no next item";
        this.index++;
        this.itemKey = this.index;
        this.item = this.items[this.itemKey];
        return { key: this.itemKey, item: this.item };
      }),
      hasNext: action(function() {
        return this.index < this.items.length - 1;
      }),
      prev: action(function() {
        if (!this.hasPrev()) throw "Data store has no prev item";
        this.index--;
        this.itemKey = this.index;
        this.item = this.items[this.itemKey];
        return { key: this.itemKey, item: this.item };
      }),
      setSelected: action(function(selectedkey) {
        this.index = selectedkey;
        this.itemKey = selectedkey;
        this.item = this.items[this.itemKey];
        return { key: this.itemKey, item: this.item };
      }),
      //CRUD operations
      reload: action(async function(key) {
        this.init(this.Adapter, this.schema, key);
      }),
      create: action(async function() {
        if (!_.isEmpty(this.changeQueue)) throw "please save the changes";
        let { key } = await this.Adapter.create(this.newItem);
       // this.setSelected(key);
        this.reload();
        this.setSelected();
      }),
      update: action(async function() {
        let item = await this.Adapter.update(this.changeQueue);
        this.changeQueue.clear();
          
      }),
      delete: action(async function() {
        if (!_.isEmpty(this.changeQueue)) throw "please save the changes";
        let item = await this.Adapter.delete(this.itemKey);
        let itemKey = this.itemKey;
      //  this.setSelected(this.itemKey);
        this.reload();
        this.setSelected();
        
      }),
      each: action(function(callback) {
        for (let index = 0; index < this.items.length; index++) {
          let item = this.items[index];
          callback(item, index);
        }
      })
    });

    this.init(DS, schema, item_Key);
  }
}

///////////////////=================New Changes not made in Map
class Map extends Iterator {
  constructor(DS, schema, item_Key) {
    super(DS, item_Key);

    extendObservable(this, {
      items: {},
      index: null,
      itemKey: null,
      item: {},
      dsMapKeys: [],
      changeQueue: [],
      isMap: action(function() {
        return true;
      }),
      init: action(function(DS, schema, item_Key) {
        this.schema = schema;
        this.items = getItemsModel.call(this, DS);
        this.newItem = getDefaultNewItem(schema);
        this.dsMapKeys = _.keys(this.items);
        this.index = item_Key != "" && item_Key != null
          ? _.indexOf(this.dsMapKeys, item_Key)
          : 0;

        this.itemKey = this.dsMapKeys[this.index];
        this.item = isObservable(this.items[this.itemKey])
          ? this.items[this.itemKey]
          : observable(this.items[this.itemKey]);
        // this.item = types.model("item", this.item).create();
      }),
      getByKey: action(function(item_Key) {
        if (this.items[item_Key]);
        throw "Specified key is not present in dataStore";
      }),
      next: action(function() {
        if (!this.hasNext()) throw "Data store has no next item";

        this.index++;
        this.itemKey = this.dsMapKeys[this.index];
        this.item = this.items[this.itemKey];
        // this.item = types.model("item", this.item).create();
        return { key: this.itemKey, item: this.item };
      }),
      hasNext: action(function() {
        return this.index < this.dsMapKeys.length - 1;
      }),
      prev: action(function() {
        if (!this.hasPrev()) throw "Data store has no prev item";

        this.index--;
        this.itemKey = this.dsMapKeys[this.index];
        this.item = this.items[this.itemKey];
        //this.item = types.model("item", this.item).create();
        return { key: this.itemKey, item: this.item };
      }),
      //CRUD operations

      update: action(function() {
        this.items[this.itemKey] = value;
      }),
      delete: action(function() {
        //
        this.dsMapKeys.splice(this.index, 1);
        delete this.items[this.itemKey];
      })
    });
    this.init(DS, schema, item_Key);
  }
}

//Singleton Object of DataStore
let DS = (function() {
  return {
    of: function(ds, item_Key) {
      if (_.isArray(ds.DS)) return new List(ds, item_Key);
      return new Map(ds, item_Key);
    }
  };
})();

module.exports = { DS };

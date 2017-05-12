import _ from "lodash";
import { extendObservable, observable, action, isObservable, toJS } from "mobx";
import { Type, types, onPatch, applyPatch } from "mobx-state-tree";

window.toJS=toJS;
let getItemsModel = function(DS) {
  let defaultitem = getDefaultNewItem(this.schema);

  return _.map(DS,(value,key)=>{
     let item=types.model("item", defaultitem).create(value);
     applyOnPatch.call(this,item);
     return item;
  })

},
getDefaultNewItem = function(schema) {
  let item = {};
  _.forOwn(schema, function(value, key) {
    item[key] = value.defaultVal;
  });
  return item;
},
applyOnPatch= function(item){
   onPatch(item, data => {
      let fieldKey = _.split(data.path, "/");
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
      }),
      each: action(function(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
          callback(item);
        }
      })
    });
  }
}

class List extends Iterator {
  constructor(DS, schema, item_Key) {
    super(DS, item_Key);

    extendObservable(this, {
      items: [],
      index: null,
      itemKey: null,
      item: {},
      newItem: {},
      changeQueue: [],
      isList: action(function() {
        return true;
      }),
      init: action(function(DS, schema, item_Key) {
          this.schema = schema;
        this.items = getItemsModel.call(this,DS);
      
        this.newItem = getDefaultNewItem(schema);
        this.index = item_Key != "" && item_Key != null ? item_Key : 0;
        this.itemKey = this.index;

        this.item = this.items[this.itemKey];
        //getItemModel.call(this);

     
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
        //getItemModel.call(this);


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
        //getItemModel.call(this);

        return { key: this.itemKey, item: this.item };
      }),
      //CRUD operations
      update: action(function(value) {
        this.items[this.itemKey] = value;
      }),
      delete: action(function() {
        this.items.splice(this.index, 1);
      })
    });
    this.init(DS, schema, item_Key);
   
  }
}

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
        this.items = getItemsModel.call(this,DS);
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
        return this.index < this.dsMapKeys.length;
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
      create:action(function(newItem){
       // this
      }),
      update: action(function(value) {
        this.items[this.itemKey] = value;
      }),
      delete: action(function() {
        this.dsMapKeys.splice(this.index, 1);
        delete this.items[this.itemKey];
      })
    });
    this.init(DS, schema, item_Key);

    onPatch(this.item, data => {
    });
  }
}

//Singleton Object of DataStore
let DS = (function() {
  return {
    of: function(ds, item_Key) {
      if (_.isArray(ds)) return new List(ds, item_Key);
      return new Map(ds, item_Key);
    }
  };
})();

module.exports = { DS };

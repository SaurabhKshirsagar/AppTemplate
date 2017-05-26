import _ from "lodash";
import R from "ramda";
import immutable from "immutable";

function Storage(){};
Storage.prototype.setItem=function(name,value){
  this[name]=value;
};
Storage.prototype.getItem=function(name){
  return this[name];
};
let localStorage=new Storage();

function MemoryAdapter(DS, { events }, dsName) {
  this.events = events;
  this.dsName = dsName;
 debugger;

  //check in localStorage
  if (!localStorage.getItem(this.dsName)) {
    this.DS = DS;
    localStorage.setItem(this.dsName, JSON.stringify(this.DS));
  } else
    this.DS = JSON.parse(localStorage.getItem(this.dsName));
}

MemoryAdapter.prototype.create = function(item) {
  let items = localStorage.getItem(this.dsName);
    items = JSON.parse(items);
    //Note: Only list Support for now
    let { preCreate, postCreate } = this.events;
    return R.composeP(
      postCreate,
      item => {
        items.push(item);
        localStorage.setItem(this.dsName, JSON.stringify(items));
        this.DS = items;
        return Promise.resolve({ key: items.length, item: item });
      },
      preCreate
    )(item);
  
};

MemoryAdapter.prototype.update = function(changeQueue) {
  let items = immutable.fromJS(JSON.parse(localStorage.getItem(this.dsName)));
  _.map(changeQueue, (changeObj, key) => {
    let { update: { itemKey, fieldKey, value } } = changeObj;
    let changePath = fieldKey.split("/");
    changePath[0] = itemKey;
    items = items.setIn(changePath, value);
  });
  localStorage.setItem(this.dsName, JSON.stringify(items.toJS()));
  this.DS = items.toJS();
  return this;
};

MemoryAdapter.prototype.delete = function(itemKey) {
  let { preDelete, postDelete } = this.events;
  return R.composeP(
    postDelete,
    itemKey => {
      let items = JSON.parse(localStorage.getItem(this.dsName));
      items.splice(itemKey, 1);
      localStorage.setItem(this.dsName, JSON.stringify(items));
      this.DS = items;
      return Promise.resolve(itemKey);
    },
    preDelete
  )(itemKey);
};


export default (DS, schema, dsName) => new MemoryAdapter(DS, schema, dsName);

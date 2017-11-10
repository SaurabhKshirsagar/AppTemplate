import _ from "lodash";
import R from "ramda";
import immutable from "immutable";
import p10modelparser from "helpers/p10modelparser";

async function parseModelJSON(modelJsonUrl, dsName) {
  let { apis } = await p10modelparser(modelJsonUrl);
  let api = apis[dsName];
  return api;
}

function ModelAdapter(modelJsonUrl, schema, dsName, Authorization) {
  this.modelJsonUrl = modelJsonUrl;
  this.dsName = dsName;
  this.Authorization = Authorization;
  this.DS = [];
}

ModelAdapter.prototype.init = async function() {
  this.api = await parseModelJSON(this.modelJsonUrl, this.dsName);
  debugger;
  let { body } = await this.api[`${this.dsName}___get__where`]({
    apiheaders: { Authorization: this.Authorization }
  });
  this.DS = body;
  return _.cloneDeep(this.DS);
};

ModelAdapter.prototype.create = function(item) {
  return R.composeP(
    data => {
      let ds = this.DS;
      ds.push(data.body);
      this.DS = _.sortBy(ds, "id");
      let key = _.findIndex(this.DS, ["id", data.body.id]);
      return { key, item: data.body };
    },
    this.api[`${this.dsName}_create`]
  )({ data: item, apiheaders: { Authorization: this.Authorization } });
};

ModelAdapter.prototype.update = function(changeQueue) {
  let changeObject = immutable.fromJS({});
  _.map(changeQueue, (item, key) => {
    let { update: { itemKey, fieldKey, value } } = item;
    let changePath = fieldKey.split("/");
    changePath[0] = this.DS[itemKey].id;
    changeObject = changeObject.setIn(changePath, value);
  });
  changeObject = changeObject.toJS();

  _.reduce(changeObject,this.updateItem.bind(this), {});
};

ModelAdapter.prototype.updateItem=async function(prev, data, id){
     return await this.api[`${this.dsName}_prototype_updateAttributes__patch_${this.dsName}s__id_`]({data,id,apiheaders: { Authorization: this.Authorization } })
}


ModelAdapter.prototype.delete = function(itemKey) {
  let { id } = this.DS[itemKey];
  return R.composeP(this.api[`${this.dsName}_deleteById`])({
    id,
    apiheaders: { Authorization: this.Authorization }
  });
};

export default (modelJsonUrl, schema, dsName, Authorization) =>
  new ModelAdapter(modelJsonUrl, schema, dsName, Authorization);

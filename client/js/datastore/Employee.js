import { DS } from "helpers/datastore";
import adapter from "helpers/adaptor/modeladaptor";
let schema = {
  properties: {
    department: {
      defaultVal: "",
      minLength: 0,
      maxLength: 0,
      type: "string"
    },
    name: {
      defaultVal: "",
      minLength: 0,
      maxLength: 0,
      type: "string"
    },

    empid: {
      defaultVal: 0,
      type: "number"
    },
    id: {
      defaultVal: "",
      type: "string"
    }
  },
  events: {
    onNew: async function(item) {
      return item;
    }
  }
};
let adapterObj = adapter(
  "http://35.185.0.85:32426/explorer/swagger.json",
  schema,
  "Employee",
  "Bearer 18c4a9368abcae4ef3384eff1c630f08"
);
export default DS.of(adapterObj, schema);

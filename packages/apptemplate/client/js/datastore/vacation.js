import { DS } from "helpers/datastore";
import adapter from "helpers/adaptor/memoryadaptor";
let schema = {
  auto: true,
  properties: {
    EmployeeID: {
      defaultVal: 0,
      regExp: "",
      maxVal: 30,
      minVal: 0,
      displayInView: true,
      description: "EmployeeID",
      index: false,
      id: false,
      propertyName: "EmployeeID",
      isArray: false,
      type: "number",
      label: "Employee ID",
      required: false
    },
    Employeename: {
      defaultVal: "",
      regExp: "",
      maxLength: 30,
      minLength: 0,
      displayInView: true,
      description: "Employeename",
      index: false,
      id: false,
      propertyName: "Employeename",
      isArray: false,
      type: "string",
      label: "Employee name",
      required: false
    },
    halfDay: {
      defaultVal: false,
      useDefaultValCheak: false,
      displayInView: true,
      description: "halfDay",
      index: false,
      id: false,
      propertyName: "halfDay",
      isArray: false,
      type: "boolean",
      label: "Half Day",
      required: false
    },
    startDate: {
      defaultVal: "",
      regExp: "",
      maxLength: 30,
      minLength: 0,
      displayInView: true,
      description: "startDate",
      index: false,
      id: false,
      propertyName: "startDate",
      isArray: false,
      type: "string",
      label: "start Date",
      required: false
    },
    endDate: {
      defaultVal: "",
      regExp: "",
      maxLength: 30,
      minLength: 0,
      displayInView: true,
      description: "endDate",
      index: false,
      id: false,
      propertyName: "endDate",
      isArray: false,
      type: "string",
      label: "end Date",
      required: false
    },
    approved: {
      defaultVal: false,
      useDefaultValCheak: false,
      displayInView: true,
      description: "halfDay",
      index: false,
      id: false,
      propertyName: "approved",
      isArray: false,
      type: "boolean",
      label: "approved",
      required: false
    },
    reason: {
      defaultVal: "",
      regExp: "",
      maxLength: 30,
      minLength: 0,
      displayInView: true,
      description: "reason",
      index: false,
      id: false,
      propertyName: "reason",
      isArray: false,
      type: "string",
      label: "reason",
      required: false
    }
  },
  events: {
    onNew: async function(item) {
      item.startDate = new Date().toString();
      return item;
    },
    preCreate: async function(item) {
      console.log(`pre-create : ${item}`);
      return item;
    },
    postCreate: async function({ key, item }) {
      alert(`New item added.`);
      return {key,item};
    },
    preUpdate: async function(item) {},
    postUpdate: async function(item) {},
    preDelete: async function(item) {
      console.log(`pre-Delete : ${item}`);
      return item;
    },
    postDelete: async function(item) {
      console.log(`pre-Delete : ${item}`);
      alert(`${item} deleted`);
      return item;
    }
  }
};
let dataStore = [
  {
    EmployeeID: 1,
    Employeename: "Jack",
    halfDay: true,
    startDate: "10 May 2017",
    endDate: "12 May 2017",
    approved: true,
    reason: "going home"
  },
  {
    EmployeeID: 2,
    Employeename: "Demon",
    halfDay: true,
    startDate: "1 june 2017",
    endDate: "2 june 2017",
    approved: false,
    reason: "birthday"
  },
  {
    EmployeeID: 3,
    Employeename: "john",
    halfDay: true,
    startDate: "5 Jan 2017",
    endDate: "8 Jan 2017",
    approved: true,
    reason: "marriage"
  },
  {
    EmployeeID: 4,
    Employeename: "stefan",
    halfDay: true,
    startDate: "3 May 2017",
    endDate: "4 May 2017",
    approved: false,
    reason: ""
  }
];
let adapterObj = adapter(dataStore, schema, "vacation");
export default DS.of(adapterObj, schema);

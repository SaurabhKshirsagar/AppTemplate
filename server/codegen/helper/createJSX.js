let _ = require("lodash");

let R = require("ramda");

let { getSlidePath, sortBy } = require("./getslidepath");

let getValue = value => {
  return value.mode && value.mode == "binding"
    ? value.bindinga
    : _.isObject(value.literal)
        ? `{${getProps(value.literal)}}`
        : _.isString(value.literal) ? `"${value.literal}"` : value.literal;
};

let properties = "";

let getProps = properties => {
  properties = _.reduce(
    properties,
    (prev, value, key) => {
      if (value) return `${prev} ${key} : ${getValue(value)},`;

      return `${prev}`;
    },
    ""
  );

  return properties.substring(0, properties.length - 1);
};

let createJSX = jsonTree => {
  let children = jsonTree.props
    ? jsonTree.props.children ? jsonTree.props.children : []
    : [];

  let slides = jsonTree.slides ? jsonTree.slides : null;

  let ref = jsonTree.props
    ? jsonTree.props.ref ? jsonTree.props.ref : null
    : null;

  let component = jsonTree.type;

  let action = jsonTree.props ? jsonTree.props.actions || {} : {};

  let style = jsonTree.props ? jsonTree.props.style || {} : {};

  let defaults = jsonTree.props ? jsonTree.props.defaults || {} : {};

  let validations = jsonTree.props ? jsonTree.props.validations || {} : {};

  let styleStr = _.isEmpty(style) ? "" : `style : {${getProps(style)}},`;

  let defaultsStr = _.isEmpty(defaults) ? "" : `${getProps(defaults)},`;

  let validationsStr = _.isEmpty(validations)
    ? ""
    : `validations : {${getProps(validations)}},`;

  let actions = _.reduce(
    action,
    (prev, value, key) => {
      if (value)
        return `${prev} ${key}={($context,$globals,$params,value)=>{(${value.literal})($context,$globals,$params,value)}}`;

      return `${prev}`;
    },
    ""
  );

  if (ref) {
    component = _.replace(ref, "Views/", "").trim();
  }

  let childNode = [];

  if (slides && typeof slides == "object") {
    let areaName = jsonTree.id;

    let childNodeObj = _.map(slides, (object, key) => {
      return {
        path: getSlidePath(object, areaName, slides),
        slide: createJSX(object)
      };
    });

    if (ref) {
      component = _.replace(ref, "Views/", "").trim();
    }

    childNodeObj.sort(sortBy("path"));

    childNode = _.reduce(
      childNodeObj,
      (prev, value, key) =>
        `${prev} 
        <PathComponent pathname={"${value.path}"} component={()=>${value.slide}} {...this.getContexts()} />`,
      ""
    );
  } else if (children && typeof children == "object") {
    childNode = _.map(children, object => createJSX(object));

    childNode = childNode ? childNode.join("") : [];

    if (ref) {
      component = _.replace(ref, "Views/", "").trim();
    }
  }

  let contextParams = "";

  if (component == "ListItem") {
    contextParams = `context: $context,params: $params,`;
  }

  return `<${component} mapContextToProps={($context, $globals, $params) =>{return {
                                                                        ${contextParams}
                                                                        ${validationsStr}
                                                                        ${styleStr}
                                                                        ${defaultsStr}
                                                                       
                                                                   }}
                                            }
                    ${actions}
                    {...this.getContexts()}>
                    ${childNode}
              </${component}>`;
};

module.exports = { createJSX };

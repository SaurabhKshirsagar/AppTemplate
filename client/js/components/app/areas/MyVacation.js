import React from "react";
import ReactDom from "react-dom";
import PathComponent from "components/core/pathComponent";
import ContextOwner from "components/core/contextowner";
import LinkToWrapper from "components/core/linktowrapper";
import ContextConsumer from "components/core/contextconsumer";

import $globals from "components/app/globals";
import { navigateTo } from "actions/navigation";

import Area from "components/core/area";

import Slide from "components/core/slide";

import TextBox from "components/core/textbox";

import Form from "components/core/form";

import CheckBox from "components/core/checkbox";

import Button from "components/core/button";

import List from "components/core/list";

import ListItem from "components/core/listitem";

class MyVacation extends ContextOwner {
  getContextVars() {
    return {};
  }
  render() {
    return (
      <Area
        mapContextToProps={($context, $params) => {
          return {};
        }}
        {...this.getContexts()}
      >
        <PathComponent
          pathname={"/MyVacation"}
          component={() => (
            <Slide
              mapContextToProps={($context, $params) => {
                return { id: "Vacations", title: "Vacations" };
              }}
              {...this.getContexts()}
            >

              <Form
                mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      overflow: "auto",
                      display: "flex",
                      width: "260px",
                      flexDirection: "column",
                      left: "0px",
                      height: "300px",
                      position: "relative",
                      border: "solid 0.3px #d4cfcf",
                      margin: "4px",
                      padding: "4px",
                      backgroundColor: "white",
                      right: "0px"
                    },
                    name: "Form",
                    datastore: "Employee",
                    create: true
                  };
                }}
                {...this.getContexts()}
              >
                <TextBox
                  mapContextToProps={($context, $params) => {
                    return {
                      validations: {
                        required: { value: "true", message: "Required." },
                        minLength: {
                          value: "2",
                          message: "Must be at least 2 characters."
                        },
                        maxLength: {
                          value: "6",
                          message: "Must be at most 6 characters."
                        }
                      },
                      style: {
                        height: 25,
                        width: 200,
                        marginTop: 8,
                        marginRight: 4,
                        marginBottom: 0,
                        marginLeft: 4
                      },
                      name: "sa",
                 value: $context.datastore.newItem.id,
                      placeholder: "id"
                    };
                  }}
                  onClick={($context, $globals, $params, value) => {
                    (function onClick(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {})($context, $globals, $params, value);
                  }}
                  onChange={($context, $globals, $params, value) => {
                    (function onChange(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {})($context, $globals, $params, value);
                  }}
                  onFocus={($context, $globals, $params, value) => {
                    (function onFocus(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {})($context, $globals, $params, value);
                  }}
                  onBlur={($context, $globals, $params, value) => {
                    (function onBlur(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {
                      $context.datastore.newItem.id = value;
                    })($context, $globals, $params, value);
                  }}
                  {...this.getContexts()}
                />
                <TextBox
                  mapContextToProps={($context, $params) => {
                    return {
                      validations: {
                        required: { value: "true", message: "Required." },
                        minLength: {
                          value: "2",
                          message: "Must be at least 2 characters."
                        },
                        maxLength: {
                          value: "6",
                          message: "Must be at most 6 characters."
                        }
                      },
                      style: {
                        height: 25,
                        width: 200,
                        marginTop: 8,
                        marginRight: 4,
                        marginBottom: 0,
                        marginLeft: 4
                      },
                      name: "sa",
                      value: $context.datastore.newItem.name,
                      placeholder: "name"
                    };
                  }}
                  onClick={($context, $globals, $params, value) => {
                    (function onClick(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {})($context, $globals, $params, value);
                  }}
                  onChange={($context, $globals, $params, value) => {
                    (function onChange(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {})($context, $globals, $params, value);
                  }}
                  onFocus={($context, $globals, $params, value) => {
                    (function onFocus(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {})($context, $globals, $params, value);
                  }}
                  onBlur={($context, $globals, $params, value) => {
                    (function onBlur(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {
                      $context.datastore.newItem.name = value;
                    })($context, $globals, $params, value);
                  }}
                  {...this.getContexts()}
                />
                <TextBox
                  mapContextToProps={($context, $params) => {
                    return {
                      validations: {
                        required: { value: "true", message: "Required." },
                        minLength: {
                          value: "2",
                          message: "Must be at least 2 characters."
                        },
                        maxLength: {
                          value: "6",
                          message: "Must be at most 6 characters."
                        }
                      },
                      style: {
                        height: 25,
                        width: 200,
                        marginTop: 8,
                        marginRight: 4,
                        marginBottom: 0,
                        marginLeft: 4
                      },
                      name: "sa",
                      value: $context.datastore.newItem.department,
                      placeholder: "department"
                    };
                  }}
                  onClick={($context, $globals, $params, value) => {
                    (function onClick(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {})($context, $globals, $params, value);
                  }}
                  onChange={($context, $globals, $params, value) => {
                    (function onChange(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {})($context, $globals, $params, value);
                  }}
                  onFocus={($context, $globals, $params, value) => {
                    (function onFocus(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {})($context, $globals, $params, value);
                  }}
                  onBlur={($context, $globals, $params, value) => {
                    (function onBlur(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {
                      $context.datastore.newItem.department = value;
                    })($context, $globals, $params, value);
                  }}
                  {...this.getContexts()}
                />
                <Button
                  mapContextToProps={($context, $params) => {
                    return {
                      style: {
                        backgroundColor: "white",
                        height: "40px",
                        width: "90px",
                        margin: "4px"
                      },
                      name: "Create",
                      text: "Create"
                    };
                  }}
                  onClick={($context, $globals, $params, value) => {
                    (function onClick(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {
                      $context.datastore.create();
                    })($context, $globals, $params, value);
                  }}
                  {...this.getContexts()}
                />

              </Form>

              <List
                mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      overflow: "auto",
                      display: "flex",
                      width: "285px",
                      flexDirection: "column",
                      left: "0px",
                      height: "600px",
                      position: "relative",
                      border: "solid 0.3px #d4cfcf",
                      margin: "0px",
                      backgroundColor: "white",
                      right: "0px"
                    },
                    name: "ListItem",
                    datastore: "Employee"
                  };
                }}
                onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                {...this.getContexts()}
              >
                <ListItem
                  mapContextToProps={($context, $params) => {
                    return {
                      context: $context,
                      params: $params,
                      style: {
                        overflow: "auto",
                        display: "flex",
                        width: "240px",
                        flexDirection: "column",
                        left: "0px",
                        height: "160px",
                        position: "relative",
                        border: "solid 0.3px #d4cfcf",
                        margin: "4px",
                        backgroundColor: "white",
                        right: "0px"
                      },
                      name: "ListItem"
                    };
                  }}
                  onClick={($context, $globals, $params, value) => {
                    (function onClick(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {})($context, $globals, $params, value);
                  }}
                  {...this.getContexts()}
                >
                  <TextBox
                    mapContextToProps={($context, $params) => {
                      return {
                        validations: {
                          required: { value: "true", message: "Required." },
                          minLength: {
                            value: "2",
                            message: "Must be at least 2 characters."
                          },
                          maxLength: {
                            value: "6",
                            message: "Must be at most 6 characters."
                          }
                        },
                        style: {
                          height: 25,
                          width: 200,
                          marginTop: 8,
                          marginRight: 4,
                          marginBottom: 0,
                          marginLeft: 4
                        },
                        name: "sa",
                        value: $context.datastore.item.id,
                        placeholder: "Text Box"
                      };
                    }}
                    onClick={($context, $globals, $params, value) => {
                      (function onClick(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onChange={($context, $globals, $params, value) => {
                      (function onChange(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onFocus={($context, $globals, $params, value) => {
                      (function onFocus(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onBlur={($context, $globals, $params, value) => {
                      (function onBlur(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {
                        $context.datastore.item.id = value;
                      })($context, $globals, $params, value);
                    }}
                    {...this.getContexts()}
                  />
                  <TextBox
                    mapContextToProps={($context, $params) => {
                      return {
                        validations: {
                          required: { value: "true", message: "Required." },
                          minLength: {
                            value: "2",
                            message: "Must be at least 2 characters."
                          },
                          maxLength: {
                            value: "6",
                            message: "Must be at most 6 characters."
                          }
                        },
                        style: {
                          height: 25,
                          width: 200,
                          marginTop: 8,
                          marginRight: 4,
                          marginBottom: 0,
                          marginLeft: 4
                        },
                        name: "sa",
                        value: $context.datastore.item.name,
                        placeholder: "name"
                      };
                    }}
                    onClick={($context, $globals, $params, value) => {
                      (function onClick(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onChange={($context, $globals, $params, value) => {
                      (function onChange(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onFocus={($context, $globals, $params, value) => {
                      (function onFocus(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onBlur={($context, $globals, $params, value) => {
                      (function onBlur(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {
                        $context.datastore.item.name = value;
                      })($context, $globals, $params, value);
                    }}
                    {...this.getContexts()}
                  />

                  <TextBox
                    mapContextToProps={($context, $params) => {
                      return {
                        validations: {
                          required: { value: "true", message: "Required." },
                          minLength: {
                            value: "2",
                            message: "Must be at least 2 characters."
                          },
                          maxLength: {
                            value: "6",
                            message: "Must be at most 6 characters."
                          }
                        },
                        style: {
                          height: 25,
                          width: 200,
                          marginTop: 8,
                          marginRight: 4,
                          marginBottom: 0,
                          marginLeft: 4
                        },
                        name: "sa",
                        value: $context.datastore.item.department,
                        placeholder: "Text Box"
                      };
                    }}
                    onClick={($context, $globals, $params, value) => {
                      (function onClick(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onChange={($context, $globals, $params, value) => {
                      (function onChange(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onFocus={($context, $globals, $params, value) => {
                      (function onFocus(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onBlur={($context, $globals, $params, value) => {
                      (function onBlur(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {
                        $context.datastore.item.department = value;
                      })($context, $globals, $params, value);
                    }}
                    {...this.getContexts()}
                  />
                </ListItem>
              </List>
            </Slide>
          )}
          {...this.getContexts()}
        />



              <PathComponent
          pathname={"/MyVacation"}
          component={() => (
            <Slide
              mapContextToProps={($context, $params) => {
                return { id: "Vacations", title: "Vacations" };
              }}
              {...this.getContexts()}
            >



              <Form mapContextToProps={($context, $params) => {
                return {
                  style: {
                    overflow: "auto",
                    display: "flex",
                    width: "260px",
                    flexDirection: "column",
                    left: "0px",
                    height: "300px",
                    position: "relative",
                    border: "solid 0.3px #d4cfcf",
                    margin: "4px",
                    padding: "4px",
                    backgroundColor: "white",
                    right: "0px"
                  },
                  name: "Form",
                  datastore: "Employee",
                  create: false
                };
              }} {...this.getContexts()}>
              <TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "EmployeeID",
                    value: $context.datastore.item.id,
                      placeholder: "id"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.id = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox>
               <TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "EmployeeID",
                    value: $context.datastore.item.name,
                      placeholder: "id"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.name = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox>
              <Button mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      backgroundColor: "white",
                      height: "40px",
                      width: "20px",
                      margin: "4px"
                    },
                    name: "<",
                    text: "<",
                    index: $context.datastore.index,
                    disabled: !$context.datastore.hasPrev()
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.prev();
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </Button><Button mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      backgroundColor: "white",
                      height: "40px",
                      width: "80px",
                      margin: "4px"
                    },
                    name: "Delete",
                    text: "Delete"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.delete();
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </Button><Button mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      backgroundColor: "white",
                      height: "40px",
                      width: "20px",
                      margin: "4px"
                    },
                    name: ">",
                    text: ">",
                    index: $context.datastore.index,
                    disabled: !$context.datastore.hasNext()
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.next();
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </Button>
            </Form>






            
              <List
                mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      overflow: "auto",
                      display: "flex",
                      width: "285px",
                      flexDirection: "column",
                      left: "0px",
                      height: "600px",
                      position: "relative",
                      border: "solid 0.3px #d4cfcf",
                      margin: "0px",
                      backgroundColor: "white",
                      right: "0px"
                    },
                    name: "ListItem",
                    datastore: "Employee"
                  };
                }}
                onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                {...this.getContexts()}
              >
                <ListItem
                  mapContextToProps={($context, $params) => {
                    return {
                      context: $context,
                      params: $params,
                      style: {
                        overflow: "auto",
                        display: "flex",
                        width: "240px",
                        flexDirection: "column",
                        left: "0px",
                        height: "160px",
                        position: "relative",
                        border: "solid 0.3px #d4cfcf",
                        margin: "4px",
                        backgroundColor: "white",
                        right: "0px"
                      },
                      name: "ListItem"
                    };
                  }}
                  onClick={($context, $globals, $params, value) => {
                    (function onClick(
                      context = $context,
                      globals = $globals,
                      params = $params,
                      value
                    ) {})($context, $globals, $params, value);
                  }}
                  {...this.getContexts()}
                >
                  <TextBox
                    mapContextToProps={($context, $params) => {
                      return {
                        validations: {
                          required: { value: "true", message: "Required." },
                          minLength: {
                            value: "2",
                            message: "Must be at least 2 characters."
                          },
                          maxLength: {
                            value: "6",
                            message: "Must be at most 6 characters."
                          }
                        },
                        style: {
                          height: 25,
                          width: 200,
                          marginTop: 8,
                          marginRight: 4,
                          marginBottom: 0,
                          marginLeft: 4
                        },
                        name: "sa",
                        value: $context.datastore.item.id,
                        placeholder: "Text Box"
                      };
                    }}
                    onClick={($context, $globals, $params, value) => {
                      (function onClick(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onChange={($context, $globals, $params, value) => {
                      (function onChange(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onFocus={($context, $globals, $params, value) => {
                      (function onFocus(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onBlur={($context, $globals, $params, value) => {
                      (function onBlur(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {
                        $context.datastore.item.id = value;
                      })($context, $globals, $params, value);
                    }}
                    {...this.getContexts()}
                  />
                  <TextBox
                    mapContextToProps={($context, $params) => {
                      return {
                        validations: {
                          required: { value: "true", message: "Required." },
                          minLength: {
                            value: "2",
                            message: "Must be at least 2 characters."
                          },
                          maxLength: {
                            value: "6",
                            message: "Must be at most 6 characters."
                          }
                        },
                        style: {
                          height: 25,
                          width: 200,
                          marginTop: 8,
                          marginRight: 4,
                          marginBottom: 0,
                          marginLeft: 4
                        },
                        name: "sa",
                        value: $context.datastore.item.name,
                        placeholder: "name"
                      };
                    }}
                    onClick={($context, $globals, $params, value) => {
                      (function onClick(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onChange={($context, $globals, $params, value) => {
                      (function onChange(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onFocus={($context, $globals, $params, value) => {
                      (function onFocus(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onBlur={($context, $globals, $params, value) => {
                      (function onBlur(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {
                        $context.datastore.item.name = value;
                      })($context, $globals, $params, value);
                    }}
                    {...this.getContexts()}
                  />

                  <TextBox
                    mapContextToProps={($context, $params) => {
                      return {
                        validations: {
                          required: { value: "true", message: "Required." },
                          minLength: {
                            value: "2",
                            message: "Must be at least 2 characters."
                          },
                          maxLength: {
                            value: "6",
                            message: "Must be at most 6 characters."
                          }
                        },
                        style: {
                          height: 25,
                          width: 200,
                          marginTop: 8,
                          marginRight: 4,
                          marginBottom: 0,
                          marginLeft: 4
                        },
                        name: "sa",
                        value: $context.datastore.item.department,
                        placeholder: "Text Box"
                      };
                    }}
                    onClick={($context, $globals, $params, value) => {
                      (function onClick(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onChange={($context, $globals, $params, value) => {
                      (function onChange(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onFocus={($context, $globals, $params, value) => {
                      (function onFocus(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {})($context, $globals, $params, value);
                    }}
                    onBlur={($context, $globals, $params, value) => {
                      (function onBlur(
                        context = $context,
                        globals = $globals,
                        params = $params,
                        value
                      ) {
                        $context.datastore.item.department = value;
                      })($context, $globals, $params, value);
                    }}
                    {...this.getContexts()}
                  />
                </ListItem>
              </List>
            </Slide>
          )}
          {...this.getContexts()}
        />



                <PathComponent
          pathname={"/MyVacation"}
          component={() => (
            <Slide
              mapContextToProps={($context, $params) => {
                return { id: "Vacations", title: "Vacations" };
              }}
              {...this.getContexts()}>

              <List
                mapContextToProps={($context, $params) => {
                  return {
                      style: {
                    backgroundColor: "white",
                 
                  },
                 
                    datastore:"vacation",

               
                  };
                }}
                onSelectionChanged={($context, $params, key, item, items) => {
                  $context.datastore.reload
                }}
                {...this.getContexts()}
              >
                <ListItem
                  {...this.getContexts()}
                  mapContextToProps={($context, $params) => {
                    return {
                      context: $context,
                      params: $params
                    };
                  }}
                >
               <TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "EmployeeID",
                    value: $context.datastore.item.EmployeeID,
                    placeholder: "Employee ID"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.EmployeeID = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "Employeename",
                    value: $context.datastore.item.Employeename,
                    placeholder: "Employee name"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.Employeename = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><CheckBox mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      height: "25px",
                      width: "100px",
                      margin: "8px 4px 0px 4px"
                    },
                    name: "halfDay",
                    value: $context.datastore.item.halfDay,
                    text: "Half Day"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.halfDay = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </CheckBox>

                </ListItem>
              </List>
            </Slide>
          )}
          {...this.getContexts()}
        />


        <PathComponent
          pathname={"/MyVacation"}
          component={() => (
            <Slide
              mapContextToProps={($context, $params) => {
                return { id: "Vacation", title: "Vacation" };
              }}
              {...this.getContexts()}>

              <List
                mapContextToProps={($context, $params) => {
                  return {
                      style: {
                    backgroundColor: "white",
                 
                  },
                 
                    datastore:"vacation",

               
                  };
                }}
                onSelectionChanged={($context, $params, key, item, items) => {
                  $context.datastore.reload
                }}
                {...this.getContexts()}
              >
                <ListItem
                  {...this.getContexts()}
                  mapContextToProps={($context, $params) => {
                    return {
                      context: $context,
                      params: $params
                    };
                  }}
                >
               <TextBox mapContextToProps={($context, $params) => {
            
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "EmployeeID",
                    value: $context.datastore.item.EmployeeID,
                    placeholder: "Employee ID"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.EmployeeID = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "Employeename",
                    value: $context.datastore.item.Employeename,
                    placeholder: "Employee name"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.Employeename = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><CheckBox mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      height: "25px",
                      width: "100px",
                      margin: "8px 4px 0px 4px"
                    },
                    name: "halfDay",
                    value: $context.datastore.item.halfDay,
                    text: "Half Day"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.halfDay = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </CheckBox>

                </ListItem>
              </List>

             
            </Slide>
          )}
          {...this.getContexts()}
        />


        <PathComponent
          pathname={"/MyVacation"}
          component={() => (
            <Slide
              mapContextToProps={($context, $params) => {
                return { id: "Vacation1", title: "Vacation1" };
              }}
              {...this.getContexts()}>



              <Form mapContextToProps={($context, $params) => {
                return {
                  style: {
                    overflow: "auto",
                    display: "flex",
                    width: "260px",
                    flexDirection: "column",
                    left: "0px",
                    height: "300px",
                    position: "relative",
                    border: "solid 0.3px #d4cfcf",
                    margin: "4px",
                    padding: "4px",
                    backgroundColor: "white",
                    right: "0px"
                  },
                  name: "Form",
                  datastore: "vacation",
                  create: false
                };
              }} {...this.getContexts()}>
              <TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "EmployeeID",
                    value: $context.datastore.item.EmployeeID,
                    placeholder: "Employee ID"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.EmployeeID = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "Employeename",
                    value: $context.datastore.item.Employeename,
                    placeholder: "Employee name"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.Employeename = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><CheckBox mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      height: "25px",
                      width: "100px",
                      margin: "8px 4px 0px 4px"
                    },
                    name: "halfDay",
                    value: $context.datastore.item.halfDay,
                    text: "Half Day"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.halfDay = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </CheckBox><TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "startDate",
                    value: $context.datastore.item.startDate,
                    placeholder: "start Date"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.startDate = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "endDate",
                    value: $context.datastore.item.endDate,
                    placeholder: "end Date"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.endDate = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><CheckBox mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      height: "25px",
                      width: "100px",
                      margin: "8px 4px 0px 4px"
                    },
                    name: "approved",
                    value: $context.datastore.item.approved,
                    text: "approved"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.approved = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </CheckBox><TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "reason",
                    value: $context.datastore.item.reason,
                    placeholder: "reason"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.item.reason = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><Button mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      backgroundColor: "white",
                      height: "40px",
                      width: "20px",
                      margin: "4px"
                    },
                    name: "<",
                    text: "<",
                    index: $context.datastore.index,
                    disabled: !$context.datastore.hasPrev()
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.prev();
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </Button><Button mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      backgroundColor: "white",
                      height: "40px",
                      width: "80px",
                      margin: "4px"
                    },
                    name: "Delete",
                    text: "Delete"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.delete();
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </Button><Button mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      backgroundColor: "white",
                      height: "40px",
                      width: "20px",
                      margin: "4px"
                    },
                    name: ">",
                    text: ">",
                    index: $context.datastore.index,
                    disabled: !$context.datastore.hasNext()
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.next();
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </Button>
            </Form>

                 <Form mapContextToProps={($context, $params) => {
                return {
                  style: {
                    overflow: "auto",
                    display: "flex",
                    width: "260px",
                    flexDirection: "column",
                    left: "0px",
                    height: "300px",
                    position: "relative",
                    border: "solid 0.3px #d4cfcf",
                    margin: "4px",
                    padding: "4px",
                    backgroundColor: "white",
                    right: "0px"
                  },
                  name: "Form",
                  datastore: "vacation",
                  create: true
                };
              }} {...this.getContexts()}>
              <TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "EmployeeID",
                    value: $context.datastore.newItem.EmployeeID,
                    placeholder: "Employee ID"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.newItem.EmployeeID = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "Employeename",
                    value: $context.datastore.newItem.Employeename,
                    placeholder: "Employee name"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.newItem.Employeename = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><CheckBox mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      height: "25px",
                      width: "100px",
                      margin: "8px 4px 0px 4px"
                    },
                    name: "halfDay",
                    value: $context.datastore.newItem.halfDay,
                    text: "Half Day"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.newItem.halfDay = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </CheckBox><TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "startDate",
                    value: $context.datastore.newItem.startDate,
                    placeholder: "start Date"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.newItem.startDate = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "endDate",
                    value: $context.datastore.newItem.endDate,
                    placeholder: "end Date"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.newItem.endDate = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><CheckBox mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      height: "25px",
                      width: "100px",
                      margin: "8px 4px 0px 4px"
                    },
                    name: "approved",
                    value: $context.datastore.newItem.approved,
                    text: "approved"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.newItem.approved = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </CheckBox><TextBox mapContextToProps={($context, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters."
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters."
                      }
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4
                    },
                    name: "reason",
                    value: $context.datastore.newItem.reason,
                    placeholder: "reason"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }} onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.newItem.reason = value;
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </TextBox><Button mapContextToProps={($context, $params) => {
                  return {
                    style: {
                      backgroundColor: "white",
                      height: "40px",
                      width: "90px",
                      margin: "4px"
                    },
                    name: "Create",
                    text: "Create"
                  };
                }} onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {
                    $context.datastore.create();
                  })($context, $globals, $params, value);
                }} {...this.getContexts()}>
              </Button>
            </Form>
            </Slide>
          )}
          {...this.getContexts()}
        />
      </Area>
    );
  }
}

export default ContextConsumer(MyVacation);

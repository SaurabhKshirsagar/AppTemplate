let reactDefaultTemplate = (componentName, renderBody, funContextVarsString) =>
  {
    return `class ${componentName} extends ContextOwner {
            ${funContextVarsString}
            render() {
                return (
                    ${renderBody}
                );
            }
            };
            export default ContextConsumer(${componentName})`;
  },
  reactAppTemplate = (leftPanel, rightPanel) => {
    return `class App extends ContextOwner {
            render() {
                return (
                    <div>
                        <div  style={{height:"8vh", width:"100%", backgroundColor:'#2196f3', color:'white',fontSize:'xx-large'}}>
                            p10
                        </div>
                        <div  style={{display:"flex"}} >
                            <div  style={{height:"92vh", width:"15%", backgroundColor:'#337ab7'}} > 
                                ${leftPanel}
                            </div>
                                <div style={{height:"92vh", width:"85%", display:"flex"}}> 
                                ${rightPanel}
                                </div>                    
                        </div>
                    </div>)
            }
        }
        export default ContextConsumer(App);`;
  },
  reactNativeAppTemplate = (leftPanel, rightPanel) => {
    return `class App extends ContextOwner {
            openDrawer() {
                this._drawer.open();
            }
            navigate(path) {
                navigateTo(path);
            }
            render() {
                let menus = (
                     <List>
                ${leftPanel}
                 </List>
                );

                return (
                <View>
                    <MediaQuery minDeviceWidth={700} maxDeviceWidth={1300}>
                    <View>
                        <View style={styles.header}>
                        <List>
                            <ListItem>
                            <Text
                                style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                color: "white",
                                textAlign: "center"
                                }}
                            >
                                p10
                            </Text>
                            </ListItem>
                        </List>
                        </View>
                        <View style={tabStyles.body}>
                        <View style={tabStyles.menu}>
                            {menus}
                        </View>
                            ${rightPanel}
                        </View>
                    </View>
                    </MediaQuery>

                    <MediaQuery maxDeviceWidth={400}>
                    <View style={styles.body}>
                        <Drawer
                        type="overlay"
                        ref={ref => {
                            this._drawer = ref;
                        }}
                        tapToClose={true}
                        openDrawerOffset={0.5}
                        panCloseMask={0.5}
                        closedDrawerOffset={-3}
                        side="left"
                        styles={{
                            drawer: {
                            backgroundColor: "rgb(51, 122, 183)",
                            shadowColor: "#000000",
                            shadowOpacity: 0.8,
                            shadowRadius: 3
                            },
                            main: { backgroundColor: "transparent" },
                            mainOverlay: { backgroundColor: "transparent" }
                        }}
                        content={menus}
                        >
                        <View>
                            <View style={styles.header}>
                            <List>
                                <ListItem>
                                <Button
                                    transparent
                                    iconRight
                                    onPress={this.openDrawer.bind(this)}
                                >
                                    <Icon name="ios-menu" />
                                </Button>

                                </ListItem>
                            </List>
                            </View>
                            <View style={styles.body}>
                            ${rightPanel}
                            </View>
                        </View>

                        </Drawer>
                    </View>
                    </MediaQuery>

                </View>
                );
            }
            }

            export default ContextConsumer(App);`;
  },
  reactGlobalsTemplate = variableString => {
    return `let $globals={
            ${variableString}
        }
        export default $globals;`;
  },
  dataStoreTemplate = (dataStoreString, key) => {
    return `let dataStore=${dataStoreString};
        let adapterObj = adapter(
            "http://35.185.0.85:31030/explorer/swagger.json",
            schema,
            '${key}',
            "Bearer cb0ae89eabab676571bcdf2f25513f48"
        );
        export default DS.of(adapterObj,schema);`;
  };

module.exports = {
  reactGlobalsTemplate,
  reactAppTemplate,
  reactNativeAppTemplate,
  reactDefaultTemplate,
  dataStoreTemplate,
};


import Promise from 'bluebird';
import R from "ramda";
import {getRouter} from "components/reacthistory";



let navigateTo= function(path){
     let router=getRouter();
     router.push(`${path}`);
}

let historyPop=function(){;
     let history=getRouter();
     router.goBack();
};
module.exports= {
    "navigateTo":navigateTo,
    "historyPop":historyPop
};

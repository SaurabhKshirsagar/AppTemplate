import _ from "lodash";
import {extendObservable, observable,action,isObservable} from 'mobx';

class Iterator {
    constructor(DS,item_Key){
       extendObservable(this,{
             first:action(function() {
                    this.reset();
                    return this.next();
              }),
              getSelected:action(function(){
                if(this.index== -1)
                  throw "No item selected";
                return {key:this.iemKey,item:this.item};
              }),
              hasPrev:action(function() {
                  return this.index > 0;
              }),
              reset:action(function() {
                this.init(this.items);
              }),
              each:action(function(callback) {
                  for (var item = this.first(); this.hasNext(); item = this.next()) {
                      callback(item);
                  }
              })
       })
      
    }
 
}

class List extends Iterator {
    constructor(DS,item_Key){
      super(DS,item_Key)
       extendObservable(this,{
          items:[],
          index:null,
          iemKey:null,
          item:null,
          isList:action(function(){
            return true;
          }),
          init:action(function(DS,item_Key){
            this.items=DS;
            this.index=(item_Key!=""&&item_Key!=null)?item_Key:-1;
            this.iemKey=this.index;
            
            this.item=this.items[this.iemKey];
          }),
          getByKey:action(function(item_Key){
            if(item_Key>=0 && item_Key< this.items.length)
              return this.items[item_Key];
            throw "Specified key is not present in dataStore";
          }),
          next:action(function() {
            if(!this.hasNext())
              throw "Data store has no next item"
              
            this.index ++;
            this.iemKey=this.index;
            this.item=this.items[this.iemKey];
            return {key:this.iemKey,item:this.item}
          }),
          hasNext:action(function() {
            return this.index < this.items.length;
          }),
          prev:action(function() {
            if(!this.hasPrev())
              throw "Data store has no prev item"
              
            this.index --;
            this.iemKey=this.index;
            this.item=this.items[this.iemKey];
            return {key:this.iemKey,item:this.item}
          }),
          //CRUD operations
          update:action(function(value){
            this.items[this.iemKey]=value
          }),
          delete:action(function(){
            this.items.splice(this.index,1);
          })
       })
  }
}

class Map extends Iterator {
  constructor(DS,item_Key){
      super(DS,item_Key)
       extendObservable(this,{
            items:{},
            index:null,
            iemKey:null,
            item:null,
            dsMapKeys:[],
           isMap:action(function(){
              return true;
            }),
            init:action(function(DS,item_Key){
              this.items=DS;
              this.dsMapKeys=_.keys(this.items);
              this.index=(item_Key!=""&&item_Key!=null)
                            ?_.indexOf(this.dsMapKeys, item_Key)
                            :-1;
            
              this.iemKey=this.dsMapKeys[this.index]; 
              this.item=isObservable(this.items[this.iemKey])?this.items[this.iemKey]:observable(this.items[this.iemKey]);
            }),
            getByKey:action(function(item_Key){
              if(this.items[item_Key]);
              throw "Specified key is not present in dataStore";
            }),
            next:action(function() {
              if(!this.hasNext())
                throw "Data store has no next item"
                
              this.index ++;
              this.iemKey=this.dsMapKeys[this.index];
              this.item=this.items[this.iemKey];
              return {key:this.iemKey,item:this.item}
            }),
            hasNext:action(function() {
              return this.index < this.dsMapKeys.length;
            }),
            prev:action(function() {
              if(!this.hasPrev())
                throw "Data store has no prev item"
                
              this.index --;
              this.iemKey=this.dsMapKeys[this.index];
              this.item=this.items[this.iemKey];
              return {key:this.iemKey,item:this.item}
            }),
            //CRUD operations
            update:action(function(value){
              this.items[this.iemKey]=value
              debugger;
            }),
            delete:action(function(){
              this.dsMapKeys.splice(this.index,1);
              delete this.items[this.iemKey];
            })
       })
  }
}

//Singleton Object of DataStore
let DS=(function(){
   return {
        of: function (ds,item_Key) {
           if(_.isArray(ds))
              return new List(ds,item_Key);
           return new Map(ds,item_Key);
        }
    };
})();


module.exports={DS}



[
  {update:{itemKey:"keyofitem",fieldKey:"Name of field", value:"changed value"}},
  {update:{itemKey:"emp1",fieldKey:"name", value:"jack"}},
  {update:{itemKey:"emp1",fieldKey:"name", value:"demon"}},
  {update:{itemKey:"emp2",fieldKey:"empId", value:2}},
  {update:{itemKey:"emp1",fieldKey:"phone number", value:965710}},
  {delete:{itemKey:"emp1"}},
  {delete:{itemKey:"emp2"}}
]

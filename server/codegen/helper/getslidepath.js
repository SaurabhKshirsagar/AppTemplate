let sortBy=function(prop){
   return function(a,b){
      if( a[prop] > b[prop]){
          return 1;
      }else if( a[prop] < b[prop] ){
          return -1;
      }
      return 0;
   }
}


let getSlidePath=(slideObject,areaName,slidesObject)=>{
  let id=slideObject.props?(slideObject.props.defaults.id.literal?slideObject.props.defaults.id.literal:null):null;
  let parentSlide=slideObject.props?(slideObject.props.defaults.parentSlide.literal?slideObject.props.defaults.parentSlide.literal:null):null;
  let parentSlideObject=slidesObject[parentSlide];

  if(parentSlide == null)
        return `/${areaName}`  
  if(!(id&&parentSlideObject))
    throw "Slide json or id doesn't exist "
  return `${getSlidePath(parentSlideObject,areaName,slidesObject)}/${id}`
}

module.exports={getSlidePath,sortBy};
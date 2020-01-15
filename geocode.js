const request = require('request');
const geocode = (address, callback) => {

    const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1Ijoia2F2aXRhMzgwIiwiYSI6ImNrMHE2cnM4czAzeHgzbnA2azA3bDRpcm8ifQ.26SvM3161jiyn1fbRYmRnw&limit=1"
 request({url:geocodeURL,json:true},(error,response)=>{
    
   if(error){
       callback('Unable to connect to locayion service!',undefined)
   }else if(response.body.features===undefined){
       callback('Unable to  find Location.try another Search',undefined)
   }else{
       callback(undefined,{
           latitude:response.body.features[0].center[0],
           longitude:response.body.features[0].center[1],
           location:response.body.features[0].place_name

       })
   }


 })
}

module.exports = geocode
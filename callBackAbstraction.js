const geocode = require('./geocode.js')
geocode('New York',(error,data)=>{
    console.log("Error: ",error)
    console.log("Data: ",data)
})
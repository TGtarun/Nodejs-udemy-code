const request = require('request')

const forcast = (latitude,longitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/bc9d5b846adcf8669e898b34207a5364/'+latitude+','+longitude

request( { url , json: true} , (error, {body})=>{
    if(error)
    {
        callback("Unable to connect to weather Services",undefined)
    }
    else if(body.error)
    {
        callback("Some Error Comes in the way.",undefined)
    }
    else{
        callback(undefined,body.daily.data[0].summary + 'It is Currently '+ body.currently.temperature+' degree out with '+body.currently.precipProbability +' %chances of rain.')
    }

})
}

module.exports = forcast
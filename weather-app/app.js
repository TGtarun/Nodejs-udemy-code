const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')

const address = process.argv
if(address[2])
{
    geocode(address[2], (error , data) => {
        if(error)
        {
            return console.log(error)
        }
        forcast(data.latitude,data.longitude,(error,forcastdata)=>{
            if(error)
            {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forcastdata)
        })
    })
    
    
}

else
{
    console.log("Enter Location")
}

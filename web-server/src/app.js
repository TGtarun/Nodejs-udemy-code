const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')

const app = express()
const port = process.env.PORT || 4000

const publicDir = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname,'../template/views')
const partialsPath = path.join(__dirname,'../template/partials')
//console.log(viewsPath)
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDir));

app.get('', (req,res)=>{
    res.render('index',{
        title: 'Weather',
        name: 'Tarun goyal'
    })
})

app.get('/about', (req,res)=>{
    res.render('about',{
        title: 'About Me',
        name: 'tarun goyal'
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        helpMessage: 'Here is some Helpful Text.',
        title: 'Help',
        name: 'Tarun goyal'

    })
})

app.get('/help/*',(req,res)=>{
    res.render('Help-not-found',{
        title: 'Error',
        name: 'Tarun Goyal',
        error: 'Error: Help Option not found! '
    })
})

app.get("/weather",(req,res)=>{
    if(!req.query.address)
    {
        return res.send({
            error: 'Address is not provided!'
        })
    }
    geocode(req.query.address, (error , data) => {
        if(error)
        {
            return res.send({
                error: error
            })
        }
        forcast(data.latitude,data.longitude,(error,forcastdata)=>{
            if(error)
            {
                return res.send({
                    error: error
                })
            }
            // res.render('weather',{
            //     title: 'Weather',
            //     name: 'Tarun Goyal',
            //     forcast: forcastdata,
            //     location: data.location
            // });
            res.send({
                title: 'Weather',
                name: 'Tarun Goyal',
                forcast: forcastdata,
                location: data.location
            });
        })
    })

})

app.get('*',(req,res)=>{
    res.render('404-page',{
        title: 'Error',
        name: 'tarun Goyal',
        error: 'Error 404 : Page Not Found'
    })
})

app.listen(port,()=>{
    console.log("Server is listening on Port "+port)
})
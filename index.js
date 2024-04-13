const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const port = 8000;

const weather = require('weather-js')


app.get('/davao', function (req, res) {
    weather.find({search: 'Davao, PH', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weatherdvo: eval(JSON.stringify(result, null, 2)),
            }
            res.render('davao', data)
        }
      });
})

app.get('/cebu', function (req, res) {
    weather.find({search: 'Cebu, PH', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weathercebu: eval(JSON.stringify(result, null, 2)),
            }
            res.render('cebu', data)
        }
    });
})

app.get('/manila', function (req, res) {
    weather.find({search: 'Manila, PH', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weathermnl: eval(JSON.stringify(result, null, 2)),
            }
            res.render('manila', data)
        }
    });
})

app.get('/tokyo', function (req, res) {
    weather.find({search: 'Tokyo, Japan', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weathertokyo: eval(JSON.stringify(result, null, 2)),
            }
            res.render('tokyo', data)
        }
    });
})

app.get('/ottowa', function (req, res) {
    weather.find({search: 'Ottowa, Canada', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weatherottowa: eval(JSON.stringify(result, null, 2)),
            }
            res.render('ottowa', data)
        }
    });
})




app.use((req, res, next) => {
    console.log('Request Made')
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})

app.get('/', function (req, res) {
    res.render('home')
})

app.get('/home', (req, res) => {
    res.redirect('/')
})


app.use((req, res) => {
    res.render('error')
})

app.listen(port, () => {
    console.log(`Server is Running On Port ${port}`)
})
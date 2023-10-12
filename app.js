const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));


// app.use(express.static('public'));
app.use('/public', express.static('public'));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
});
app.post("/", function(req,res){
  
  const location = req.body.cityName;
  const url = "http://api.weatherapi.com/v1/current.json?key=0b8258ae9bc44ef0803195744232603&q=" + location;
    
  axios.get(url).then(function(response){
    // console.log(response.data);
   const weatherData = response.data;

   const city = weatherData.location.name;
  const temp = weatherData.current.temp_c;
 const description = weatherData.current.condition.text;
 const windSpeed = weatherData.current.wind_kph;
 const humidity = weatherData.current.humidity;

 res.render("list", {city: city, temp: temp, description: description, windSpeed: windSpeed, humidity: humidity})



  })
  


    // console.log(req.body.cityName);
})






app.listen(3000, function(req,res){
    console.log("Server is running on port 3000");
})
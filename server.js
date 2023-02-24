//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res)=>{
  res.sendFile(__dirname + "/index.html")
});

app.post('/', (req, res)=>{
  const {weight, height_ft, height_in} = req.body
  const height = height_ft * 0.3048 + height_in * 0.0254
  const BMI = Math.round((weight/height**2 + Number.EPSILON) * 100)/100
  if (BMI< 18.5){
    res.send(`Your BMI is ${BMI} you are underweight`)
  }else if (BMI <= 18.5 && BMI<=25.9){
    res.send(`Your BMI is ${BMI} you are healthy`)
  }else if (BMI <= 25 && BMI <= 29.9){
    res.send(`Your BMI is ${BMI} you are overweight`)
  }else{
    res.send(`Your BMI is ${BMI} you are obesse`)
  }


});

app.listen(3000, ()=>{console.log("server is running on port 3000")})
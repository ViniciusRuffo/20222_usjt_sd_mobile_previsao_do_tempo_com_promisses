//dotenv
require('dotenv').config()
//biblioteca axios 'http'
const axios = require('axios')
const appid = process.env.appid

const q = 'Itu'
//metric: celsius
//imperil: ferenheint
const units = 'metric'
const lang = 'pt_BR'
const cnt = 10

const base_url = 'https://api.openweathermap.org/data/2.5/forecast'

const url = `${base_url}?q=${q}&${units}&lang=${lang}&cnt=${cnt}&appid=${appid}`

console.log(url)

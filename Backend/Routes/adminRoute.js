const express = require('express');
const route = express.Router()
const { planing ,getPlaning,rdv} = require('../Controllers/adminController')

 route.post('/planing', planing);
 route.get('/getplaning', getPlaning);
 route.post('/rdv', rdv)



 module.exports = route
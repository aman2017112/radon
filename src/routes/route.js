//const express = require('express');
//const externalModule = require('../logger')
const 2ndmodule = require('../logger/logger1')
const 3rdmodule = require('../util/helper')
//const 4thmodule = require('./formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    // console.log('The constant in logger route has a value '+ 3rdModule.printDate)
    // varconsole.log('The constant in logger route has a value '+ 3rdModule.printMonth)
    // console.log('The constant in logger route has a value '+ 3rdModule.getBatchInfo)
    // console.log('The constant in logger route has a value '+ 4thModule.)
    // 2ndmodule.welcome()
    // 3rdmoduleprintDate()
    // 3rdmoduleprintMonth()
    // 3rdmodulegetBatchInfo()
   // externalModule.log()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason
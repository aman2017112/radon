const express = require('express');
//const externalModule = require('../logger')
const module2 = require('../logger/logger1.js')
const module3 = require('../util/helper.js')
const module4 = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
 module2.welcome()
 module3.printDate()
 module3.printMonth()
 module3.getBatchInfo()
 module4.Lower
 module4.Upper
 module4.trim

    res.send('My first ever api!' )
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
const express = require('express');
const fetch = require("node-fetch");
const router = express.Router();
const https = require('https');
// const endpoint = "http://localhost:5002/"
const endpoint = "http://52.15.208.69/"
var request = require("request")
var dataglobal;

router.get('/',(req,res)=>{
    res.send('get twitter');
});


router.post('/search', function(req,res,next){
    function searchInTwitter() {
        console.log('searchInTwitter');


        return new Promise(function(resolve,reject) {
            fetch(endpoint + "search_network", {
                method: "POST",
                body: JSON.stringify(req.body),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
            .then(json => resolve(json))
        });
    }
    searchInTwitter().then(function(data) {
        console.log("this is the json ---------------------------------------")
        
        
        var data2 = { 'data': data.visjs, 'success': true}
        console.log(data2)
        res.send(JSON.parse(data2));
        next();
    });
});

router.post('/update', function(req,res,next){
    function updateTwitter() {
        console.log('updateTwitter');
        return new Promise(function(resolve,reject) {
            fetch(endpoint + "update_network", {
                method: "POST",
                body: JSON.stringify(req.body),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
            .then(json => resolve(json))
        });
    }
    updateTwitter().then(function(data) {
        console.log(data)
        res.send(data);
        next();
    });
});

router.post('/wordtree', function(req,res,next){
    function wordtree() {
        console.log('wordtree----------------------');
        console.log(req.body);
     
        return new Promise(function(resolve,reject) {
      
            fetch(endpoint + "patterns_visjs", {
                method: "POST",
                body: JSON.stringify(req.body),
                headers: { 'Content-Type': 'application/json' },
                //insecure: true,
                //rejectUnauthorized: false
            })
            .then(res => res.json())
            .then(json => resolve(json));
        });
    }
    wordtree().then(function(data) {
        dataglobal=data;
        //console.log(data)
        var data2 = { 'data': data.visjs, 'success': true}
        console.log(data2);
        res.send(data);
        next();
    });
});


//router.post('/relevance', function(res){
//    data3 = { 'data': dataglobal.predictions, 'success': true}
//});


module.exports = router;
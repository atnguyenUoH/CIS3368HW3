// load the things we need
var express = require('express');
var app = express();
const bodyParser  = require('body-parser');

// required module to make calls to a REST API
const axios = require('axios');

var selectedID = "";
app.use(bodyParser.urlencoded());

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
  var exampleVar = "Javascript";
    
    // this will render our new example spage 
    res.render("pages/index.ejs", {exampleVar: exampleVar});
    
});


  app.post('/process_form', function(req, res){
    // create a variable to hold the input name parsed from the request body
    var inputname = req.body.inputname
    // create a variable to hold the username parsed from the request body
    var username = req.body.username
    // create a variable to hold ....
    var password = req.body.password

    let check = 0;

    if (req.body.rememberme == 'on')
              check = 1;


    console.log("Hero name: " + inputname);
    console.log("email is: " + username);
    console.log("password is: " + password);
    console.log("checkedbox checked: " + check);

    res.render('pages/thanks.ejs', {body: req.body})
    
  })

  app.post('/processdynamicform', function(req, res){
    //go directly to thanks.ejs and show dynamic checkbox selection
    console.log(req.body);
    selectedID = req.body;
    for (x in req.body) {
        var selectedName = x;
        console.log("selected name is: " + selectedName);
    }
    res.render('pages/thanks.ejs', {body: req.body})
    
  })



app.listen(8080);
console.log('8080 is the magic port');

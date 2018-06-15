const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;

const bulldozer = express();

const port = 3015;

//const yammerController = require("./controllers/yammer-controller");
const twitterController = require("./controllers/controller");

var url = 'mongodb://172.16.104.163:27019';


MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if(!err) {
    //mongo = db.db("starbucks");
    console.log("We are connected");
  }else{
    console.log(err.message);
  }
});


bulldozer.use(cors());

bulldozer.use(bodyParser.urlencoded({ extended: true }));
bulldozer.use(bodyParser.json());

bulldozer.use(express.static(path.join(__dirname, "www")));

bulldozer.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/www" });
});

bulldozer.post('/update_qty', function(req,res,next){
  var data = req.body;
    console.log("tamano: " + data.length);
    console.log(data);
  
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if(!err) {
      cursor = db.db("starbucks");
      console.log("We are connected");
      for(var i = 0; i < data.length; i++){
        var cant = data[i].cantidad;
        if(data[i].id)
        cursor.collection("inventario").update({producto:data[i].id},{$inc:{cantidad:-cant}});
        if(data[i].ingrediente)
        cursor.collection("inventario").update({producto:data[i].ingrediente},{$inc:{cantidad:-cant}});
        if(data[i].crema)
        cursor.collection("inventario").update({producto:data[i].crema},{$inc:{cantidad:-cant}});  
      }
      db.close();
    }else{
      console.log(err.message);
    }
  });
  next();
});

bulldozer.post('/registry_sale', function(req,res,next){
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if(!err) {
      cursor = db.db("starbucks");
      console.log("We are connected");
      for(var i = 0; i < data.length; i++){
        cursor.collection("ventas").insert(data);   
      }
      db.close();
    }else{
      console.log(err.message);
    }
  });
  next();
});


bulldozer.use("/twitts", twitterController);

bulldozer.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});

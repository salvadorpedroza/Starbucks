const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const bulldozer = express();

const port = 3015;

//const yammerController = require("./controllers/yammer-controller");
const twitterController = require("./controllers/controller");

bulldozer.use(cors());

bulldozer.use(bodyParser.urlencoded({ extended: true }));
bulldozer.use(bodyParser.json());

bulldozer.use(express.static(path.join(__dirname, "www")));

bulldozer.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/www" });
});


bulldozer.use("/twitts", twitterController);

bulldozer.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});

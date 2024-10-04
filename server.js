require('dotenv').config()

const express = require('express');
const path = require('path');
const fs = require("fs");
const app = express();

app.use(express.static(path.join(__dirname, 'pages')));

app.get("/", (req, res) => {
  fs.readFile("./pages/index.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
})

// サーバーを起動
app.listen(3000, () => {
    console.log(`サーバーを開きました`);
  });
  
  if (process.env.TOKEN == undefined || process.env.TOKEN == "") {
    console.log("TOKENを設定してください");
  }

  require('./main.js')
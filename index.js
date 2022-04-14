const express = require("express");
const app = express();
// const cors = require('cors');
const path = require("path");

app.use(express.json()); //parsing json data from the body
// app.use(cors());

// for Hosting on heroku
app.use(express.static(path.join(__dirname, "./jd_shop/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./jd_shop/build/index.html"));
});
// for Heroku

const server = app.listen(46000, () => {
  console.log(`Server is running on 46000`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server");
  server.close(() => {
    process.exit(1);
  });
});

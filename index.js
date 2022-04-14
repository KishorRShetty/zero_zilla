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

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

process.on("error", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server");
  server.close(() => {
    process.exit(1);
  });
});

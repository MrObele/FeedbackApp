//create a brand new express application and add some logic to create our first route handler
//input the express library
const express = require("express"); //commonjs syntax
//we will be using the common js modules because currently node only has support for common js modules and not ES2015
//userd for requireing or sharing code between different files.
//for the react front end we can use the ES2015 example import express from 'express'

//create a react app object
const app = express();
//the app object is used to set up various configurations for the routing
//create a route handler and associate it with a given route
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);

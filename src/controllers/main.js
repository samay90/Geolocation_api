const express = require("express");
const mainRouter = express.Router();
const country = require("../data/country.json")
const states = require("../data/states.json")
const cities = require("../data/cities.json")

mainRouter.get("/", (req, res) => {
  res.send({ code: 201, error: false, message: "Open source GeoLocation API.",length:country.length, data: country });
});
mainRouter.get("/:country", (req, res) => {
  let { country } = req.params;
  country = country[0].toUpperCase()+country.slice(1).toLowerCase();
  if (!states[country]) {
    res.send({ code: 404, error: true, message: "No country not found.", data: {} });
  }else{
    res.send({ code: 201, error: false, message: "Open source GeoLocation API.",length:states[country].length, data: states[country] });
  }
})
mainRouter.get("/:country/:state", (req, res) => {
  let { country, state } = req.params;
  country = country[0].toUpperCase()+country.slice(1).toLowerCase();
  state = state[0].toUpperCase()+state.slice(1).toLowerCase();
  if (!states[country]) {
    res.send({ code: 404, error: true, message: "No country not found.", data: {} });
  }else{
    if (!cities[state]){
      res.send({ code: 404, error: true, message: "No state not found.", data: {} }); 
    }else{
      res.send({ code: 201, error: false, message: "Open source GeoLocation API.",length:cities[state].length, data: cities[state] });
    }
  }
})
module.exports = mainRouter;

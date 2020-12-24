import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  var planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
  ];

  let defaultPlanets = JSON.parse(localStorage.getItem("planets"))
    ? JSON.parse(localStorage.getItem("planets"))
    : [];

  const [favouritePlanet, setFavouritePlanet] = useState(defaultPlanets);

  function addPlanetToFaviourite(index) {
    if (localStorage.getItem("planets") == null) {
      var planets = [];
      planets.push(index);
    }
    if (localStorage.getItem("planets") != null) {
      var planets = JSON.parse(localStorage.getItem("planets"));
      if (!planets.includes(index)) {
        planets.push(index);
      }
    }
    localStorage.setItem("planets", JSON.stringify(planets));
    setFavouritePlanet(planets);
  }

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  function removePlanetToFaviourite(index) {
    var planets = JSON.parse(localStorage.getItem("planets"));
    removeItemOnce(planets, index);
    localStorage.setItem("planets", JSON.stringify(planets));
    setFavouritePlanet(planets);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div>Planet List</div>
            </div>
            <div>
              {planets.map((planet, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => addPlanetToFaviourite(index)}
                    className="row mg-5 planet"
                  >
                    {planet}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div>Favourites</div>
            </div>
            <div className="fav-planets-parent">
              {favouritePlanet.map((planet, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => removePlanetToFaviourite(planet)}
                    className="row mg-5 favourite-planets"
                  >
                    {planets[planet]}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const favDataPath = path.join(rootDir, "data", "fav.json");
module.exports = class Fav {
  static addToFav(homeId, callback){
    Fav.getFav((favourites) => {
      
      if(favourites.includes(homeId)){
        callback("home is already mark favourite");
      }
      else{
        favourites.push(homeId);
      fs.writeFile(favDataPath, JSON.stringify(favourites), callback);
      }
    });


  }

  static getFav(callback){
    fs.readFile(favDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

    static deleteById(homeId, callback){
    Fav.getFav(homes => {
      homes = homes.filter(homeIds => home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(homes), callback);
    })
  }

};

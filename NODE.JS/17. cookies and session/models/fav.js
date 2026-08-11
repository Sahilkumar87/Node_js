// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const mongoose = require('mongoose');

const favSchema = mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Home', 
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('fav', favSchema);

// const favDataPath = path.join(rootDir, "data", "fav.json");
// module.exports = class Fav {
//   static addToFav(homeId, callback){
//     Fav.getFav((favourites) => {
      
//       if(favourites.includes(homeId)){
//         callback("home is already mark favourite");
//       }
//       else{
//         favourites.push(homeId);
//       fs.writeFile(favDataPath, JSON.stringify(favourites), callback);
//       }
//     });


//   }

//   static getFav(callback){
//     fs.readFile(favDataPath, (err, data) => {
//       callback(!err ? JSON.parse(data) : []);
//     });
//   }

//     static deleteById(delHomeId, callback){
//     Fav.getFav(homeIds => {
//       homeIds = homeIds.filter(homeId => delHomeId !== homeId);
//       fs.writeFile(favDataPath, JSON.stringify(homeIds), callback);
//     })
//   }
// };

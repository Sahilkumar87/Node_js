// Core Modules
const db = require("./utils/databaseUtil");  // learning mongoDb
const mongoose = require('mongoose');
const {ObjectId} = require('mongodb');

const homeSchema = mongoose.Schema({
  houseName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  rating: {
    type: Number, 
    required: true
  },
  photoUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }



});


module.exports = mongoose.model('Home', homeSchema);

/*
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    this.id = id;


     save()
     find()
     findById(homeId)
     deleteById(homeId, callback)


*/

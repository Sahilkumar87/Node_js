const Fav = require("../models/fav");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.find().then(([registeredHomes, fields]) => {

    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  });
};

exports.getHomes = (req, res, next) => {
  Home.find().then(([registeredHomes, fields]) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
});
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  })
};

exports.getFavouriteList = (req, res, next) => {
  Fav.getFav(favourites => {
 Home.find()
 .populate('houseId').then(([registeredHomes, fields]) => {
    const favHomes = registeredHomes.filter(home => favourites.includes(home.id));
    res.render("store/favourite-list", {
      favHomes: favHomes,
      pageTitle: "My Favourites",
      currentPage: "favourites",
    })
});



    
  })
};

exports.postAddToFavourite = (req, res, next) => {
  console.log("came to add to favourite",req.body);
  Fav.addToFav(req.body.id, error => {
    if(error){
      console.log("error while marking favourite", error);
    }
  res.redirect("/favourites");
  })
}

exports.postRemoveFromFav = (req, res, next) => {
  const homeId = req.params.homeId;
  Fav.findOneAndDelete(homeId, error => {
    if(error){
      console.log("Error while removing from favourite", error);
    }
    res.redirect("/favourites");
  })
}


exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("at home details page", homeId);
  Home.findById(homeId).then(([homes]) => {
    const home = homes[0];
    if(!home){
      console.log("Home not found");
      res.redirect("/homes");
    }
    else{
    console.log("home details found", home);
      res.render("store/home-detail", {
      home: home,
      pageTitle: "home detail",
      currentPage: "Home",
    });
    };
  })
};



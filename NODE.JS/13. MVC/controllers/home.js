const Home = require("../models/home");



exports.getHomeAdd = (req, res, next) => {
    res.render("addHome", {pageTitle: "Add Home to airbnb"});
}


exports.postHomeAdd =  (req, res, next) => {
    console.log("Home Registration successful for: ", req.body, req.body.houseName);

    const home = new Home(req.body.houseName);
    home.save();

    res.render("successfullAdd", {pageTitle: "Home Added Successfully"});
}


exports.getHome = (req, res, next) => {
    const registerHome = Home.fetchAll();
    console.log(registerHome);
    res.render('home', {registerHome: registerHome, pageTile: "airbnb Home"});
}


exports.error = (req, res, next) => {
  res.status(404).render('404page', {pageTitle: 'Page Not Found'});
}

use('EComerce');


db.products.find({"name": "Sneha"});
db.products.find({category: "Electronics"})

db.products.find({price: {$gt: 1000}})

db.products.find({price: {$gt: 1000, $lte: 5000}})

db.products.find({$or: [{category: "Electronics"}, {stock: {$lt: 50}}]})

db.products.find({}, {name: 1, price: 1, _id: 0})


db.products.find().sort({price: -1}).skip(1).limit(1)

// db.products.fint({price: {$gt: 1000}}) // greater than 1000
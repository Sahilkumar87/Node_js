use('EComerce');

db.products.updateOne(
    {name: "Wireless Mouse"},
    {$set: {price: 199}}
)
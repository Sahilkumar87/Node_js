// CRUD OPERATION
/**
C -> create
R -> read
U -> update
D -> delete
 */


// {
//     "id" :  "12443132323",
//     "name": "sahil",
//     "message": "please bring my order",
//     "timestamp": 02/08/2026 10:33PM,

// } 


// mongodb package se MongoClient import karein
const { MongoClient } = require('mongodb');

// Apna Connection String (URI) yahan dalein
// Agar local host par hai toh: "mongodb://localhost:27017"
// Agar MongoDB Atlas (cloud) par hai toh apna wala URI dalein
const uri = "mongodb://localhost:27017"; 

// Client ko initialize karein
const client = new MongoClient(uri);

async function run() {
    try {
        // Server se connect karein
        await client.connect();
        console.log("✅ MongoDB se successfully connect ho gaya!");

        // Database aur Collection ko select karein
        const database = client.db("EComerce"); // Database ka naam
        const collection = database.collection("products"); // Collection ka naam

        // --- Example Operations ---
        
        // 1. Data Insert karna
        const insertResult = await collection.insertOne({ 
            naam: "Sahil", 
            role: "Developer", 
            age: 20 
        });
        console.log(`Inserted data with _id: ${insertResult.insertedId}`);

        // 2. Data Fetch (Read) karna
        const findResult = await collection.findOne({ naam: "Rahul" });
        console.log("Found document:", findResult);

    } catch (error) {
        console.error("❌ Connection mein error aaya:", error);
    } finally {
        // Connection ko hamesha close karein
        await client.close();
        console.log("❌ Connection closed.");
    }
}

// Function ko call karein
run();
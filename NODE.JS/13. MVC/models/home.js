// core module
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtils/');

// fake databases
let registerHome = [];


module.exports = class Home {
    constructor(houseName){
        this.houseName = houseName;
    }

    save(){
        fetch(registerHome => {
            registerHome.push(this);
            const homeDataPath = path.join(rootDir, "data", "home.json");
            fs.writeFile(homeDataPath, JSON.stringify(registerHome), (error) => {
            console.log("File writing conclude", error);

        });
        });

        
    }

    static fetchAll(callback){
        const homeDataPath = path.join(rootDir, "data", "home.json");
        fs.readFile(homeDataPath, (err, data) => {
            console.log("File read: ", err, data);
            callback(!err ? JSON.parse(data) : []);
        })

    }

}
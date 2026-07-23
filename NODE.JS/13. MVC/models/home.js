// core module
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtils/');

// fake databases
const registerHome = [];


module.exports = class Home {
    constructor(houseName){
        this.houseName = houseName;
    }

    save(){
        registerHome.push(this);
        const homeDataPath = path.join(rootDir, "data", "home.json");
        fs.writeFile(homeDataPath, JSON.stringify(registerHome), (error) => {
            console.log("File writing conclude", error);
        });

        
    }

    static fetchAll(){
        return registerHome;
    }

}
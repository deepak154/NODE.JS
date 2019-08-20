const fs = require('fs');  //to save product in a file
const path = require('path')  //to create path
const rootDir = require('../util/path.js');

const p = path.join(rootDir, 'data','products.json'); //path of file

const getProductsFromFile = (cb)=>{
     fs.readFile(p, (err, fileContent)=>{
        if(err){
           return cb([]);
        }
         cb(JSON.parse(fileContent));
    });

};

module.exports = class Product {
    constructor(title)
    {
        this.title = title;
    }

    save(){
        getProductsFromFile((products)=>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                 console.log(err);
            });
        });
    }
   
    //utility function, class function not instant function
    static fetchAllProducts(cb){
      getProductsFromFile(cb); 
    }
};
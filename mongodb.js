




// const{MongoClient}=require("mongodb");
// const url="mongodb://localhost:27017";
// const database="school";
// const client=new MongoClient(url);
// async function getData() 
// {
//  let result=await client.connect();
// let db=result.db(database)
// let collection=db.collection("student");
// let responce= await collection.find().toArray()
// console.log(responce);
// // 
// }
// getData();
// const{MongoClient}=require("mongodb");
// const url="mongodb://localhost:27017";
// const database="school";
// const client=new MongoClient(url);
// async function getData() 
// {
//  let result=await client.connect();
// let db=result.db(database)
// return db.collection("student");


// let responce= await collection.find().toArray()
// console.log(responce);

// }

module.exports=getData
getData();

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const database = "school";

const client = new MongoClient(url);

async function getData() {
    const result = await client.connect();
    const db = result.db(database);

    return db.collection("student");
}

module.exports = getData;

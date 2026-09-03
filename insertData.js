// const getData=require("./mongodb");
// const insertData=async()=>
// {
// const db=await getData()

// const result= await db.insertOne(
//     {name:"note8",brand:"noikia"},
//     {name:"note9",brand:"noikia"},
//     {name:"note10",brand:"noikia"},
//     {name:"note11",brand:"noikia"},
//     {name:"note81",brand:"noikia"},
//     {name:"note80",brand:"noikia"},
//     {name:"note85",brand:"noikia"}
// )
// console.log(result);

// }
// insertData()


const getData = require("./mongodb");

const insertData = async () => {
    const db = await getData();

    const result = await db.insertMany([
        { name: "note8", brand: "noikia" },
        { name: "note9", brand: "noikia" },
        { name: "note10", brand: "noikia" },
        { name: "note11", brand: "noikia" },
        { name: "note81", brand: "noikia" },
        { name: "note80", brand: "noikia" },
        { name: "note85", brand: "noikia" }
    ]);

    console.log(result);
};

insertData();


// const getData=require("./mongodb");
// const updateData=async()=>
// {
// const up=await getData()

// const result= await up.updateOne(
//     {name:"note8",brand:"noikia"},
//     {$set:{name:"note9",brand:"noikia"}},
//     {name:"note10",brand:"noikia"},
//     {name:"note11",brand:"noikia"},
//     {name:"note81",brand:"noikia"},
//     {name:"note80",brand:"noikia"},
//     {name:"note85",brand:"noikia"}
// )
// console.log(result);

// }
// updateData()

// const getData=require("./mongodb");
// const deleteData=async()=>
// {
// const up=await getData()

// const result= await up.deleteOne(
//     {name:"note8",brand:"noikia"}
// )
// console.log(result);

// }
// deleteData()


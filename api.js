// // // const express=require("epress");
// // // const dbconnect=require("./mongodb");
// // // const app=express()
// // // app.get("/",(req,res)=>
// // // {
// // //     res.data("data send from server")

// // // }
// // // )
// // // app.get("/user"async(req,res)=>
// // // {
// // //     let data=await dbconnect()
// // //     data=await data.find().toArray()
// // //     res.send(data)
// // // })

// // // app.listen(3000,()=>
// // // {
// // //     console.log("servver is running ");
    
// // // })

// // // const express=require("express");
// // // const dbconnect=require("./mongodb");
// // // const app=express()
// // // app.use(express.json())
// // // app.get("/",(req,res)=>
// // // {
// // //     res.data("data send from server")

// // // }
// // // )
// // // app.get("/user",async(req,res)=>
// // // {
// // //     let data=await dbconnect()
// // //     data=await data.find().toArray()
// // //     res.send(data)
// // // })

// // // app.post("/insert",async(req,res)=>
// // // {
// // //      let data=await dbconnect()
// // //      let result=await data.insertOne(req.body)
// // //     res.send()
// // // })
// // // app.listen(3000,()=>
// // // {
// // //     console.log("servver is running ");
    
// // // })


// // const express = require("express");
// // const dbconnect = require("./mongodb");

// // const app = express();

// // app.use(express.json());

// // app.get("/", (req, res) => {
// //     res.send("data send from server");
// // });

// // app.get("/user", async (req, res) => {
// //     try {
// //         const data = await dbconnect();
// //         const result = await data.find().toArray();

// //         res.send(result);
// //     } catch (error) {
// //         res.status(500).send(error);
// //     }
// // });

// // app.post("/insert", async (req, res) => {
// //     try {
// //         const data = await dbconnect();

// //         const result = await data.insertOne(req.body);

// //         res.send(result);
// //     } catch (error) {
// //         res.status(500).send(error);
// //     }
// // });
// // // app.post("/insert", async (req, res) => {
// // //     const data = await dbconnect();
// // //     const result = await data.insertOne(req.body);

// // //     res.send(result);
// // // });
// // app.put("/update/:id", async (req, res) => {
// //     const data = await dbconnect();

// //     const result = await data.updateOne(
// //         { _id: new ObjectId(req.params.id) },
// //         { $set: req.body }
// //     );

// //     res.send(result);
// // });

// // app.listen(3000, () => {
// //     console.log("server is running on port 3000");
// // });
// const express = require("express");
// const { ObjectId } = require("mongodb");
// const dbconnect = require("./mongodb");

// const app = express();

// app.use(express.json());

// // app.get("/", (req, res) => {
// //     res.send("data send from server");
// // });

// app.get("/user", async (req, res) => {
//     let data = await dbconnect();
//     data = await data.find().toArray();

//     res.send(data);
// });

// // app.post("/insert", async (req, res) => {
// //     let data = await dbconnect();
// //     let result = await data.insertOne(req.body);

// //     res.send(result);
// // });

// // UPDATE
// // app.put("/update/:id", async (req, res) => {
// //     let data = await dbconnect();

// //     let result = await data.updateOne(
// //         { _id: new ObjectId(req.params.id) },
// //         { $set: req.body }
// //     );

// //     res.send(result);
// // });


// app.put("/update/:id", async (req, res) => {
//     let data = await dbconnect();

//     console.log(req.params.id);
//     console.log(req.body);

//     let result = await data.updateOne(
//         { _id: new ObjectId(req.params.id) },
//         { $set: req.body }
//     );

//     res.send(result);
// });
// app.listen(3000, () => {
//     console.log("server is running");
// });





// const express = require("express");
// const { ObjectId } = require("mongodb");
// const dbconnect = require("./mongodb");

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("data send from server");
// });

// app.get("/user", async (req, res) => {
//     let data = await dbconnect();
//     data = await data.find().toArray();

//     res.send(data);
// });

// app.post("/insert", async (req, res) => {
//     let data = await dbconnect();

//     let result = await data.insertOne(req.body);

//     res.send(result);
// });
// app.put("/update/:id", async (req, res) => {

//     console.log("ID:", req.params.id);
//     console.log("BODY:", req.body);

//     if (!req.body) {
//         return res.send("Body nahi aa rahi");
//     }

//     let data = await dbconnect();

//     let result = await data.updateOne(
//         { _id: new ObjectId(req.params.id) },
//         { $set: req.body }
//     );

//     res.send(result);
// });

// app.listen(3000, () => {
//     console.log("server is running on port 3000");
// });




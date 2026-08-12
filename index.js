// const {log}=require('console')
// const http=require('http')
// const server=http.createServer((req,res)=>{
//     res.write("Hello to home page")
//     res.end()
// })
// server.listen(3000,()=>{
//     console.log("server is running on port 3000");
    
// })

// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello from Node.js!");
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

const fs=require("fs");
fs.readFile("index.html","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
console.log("read file...()this runs first");



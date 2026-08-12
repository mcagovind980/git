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

// const fs=require("fs");
// fs.readFile("index.html","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
// console.log("read file...()this runs first");


// console.log(__dirname);
// console.log(__filename);

const fs=require('fs')
const path=require('path')
const pathDir=path.join(__dirname,"crus")

const filePath=`${pathDir}/demo.txt`
console.log(pathDir);

// fs.writeFileSync(filePath,"hello node students")

// fs.readFile(filePath,'utf-8',(err,item)=>
// {
//     console.log(item);
    
// })

// fs.appendFile(filePath,'file name is crud',(err)=>
// {
//     if(!err) console.log("  Flie is updated");
    
// })

// fs.rename(filePath,`${pathDir}/demo1.txt`,(err)=>
// {
//     if(!err) console.log("file is rename");
// })

// fs.unlinkSync(`${pathDir}/demo1.txt`)


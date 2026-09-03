// const {log}=require('console')
// const http=require('http')
// const server=http.createServer((req,res)=>{
//     res.write("Hello to home page")
//     res.end()
// })
// server.listen(3000,()=>{
//     console.log("server is running on port 3000");
    
// })

// const {log}=require('console')
// const http=req

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

// const fs=require('fs')
// const path=require('path')
// const pathDir=path.join(__dirname,"crus")

// const filePath=`${pathDir}/demo.txt`
// console.log(pathDir);

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

// const fs = require("fs");

// const inputData = process.argv;

// if (inputData[2] === "add") {
//   fs.writeFileSync(inputData[3], inputData[4]);
//   console.log("File added successfully");
// } 
// else if (inputData[2] === "remove") {
//   if (fs.existsSync(inputData[3])) {
//     fs.unlinkSync(inputData[3]);
//     console.log("File removed successfully");
//   } else {
//     console.log("File does not exist");
//   }
// } 
// else {
//   console.log("Invalid value");
// }

// const fs = require("fs");

// const inputData = process.argv;

// if (inputData[2] === "add") {
//   fs.writeFileSync(inputData[3], inputData[4]);
//   let k=4+7
//   console.log(k);
// } 
// else if (inputData[2] === "remove") {
//   if (fs.existsSync(inputData[3])) {
//     fs.unlinkSync(inputData[3]);
//     console.log("File removed successfully");
//   } else {
//     console.log("File does not exist");
//   }
// } 
// else {
//   console.log("Invalid value");
// }
// console.log(process.argv[4]);

// const sum = 0;
// let  num2 = Number(process.argv[3]);
// let sum=0;
// for(let i=0;i<=10;i++ )
//  {
// sum=sum+i;
//  }
//  console.log(sum);
 
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }

// console.log(sum);

// let  num1 = Number(process.argv[2]);
// let  num2 = Number(process.argv[3]);

// let oprator=process.argv[4]
// switch(oprator)
// {
// case "+":
//     let  sum = num1 + num2;

// console.log("Sum =", sum);

// case "-":
//  let  sub = num1 - num2;

// console.log("sub =", sub);

// case "*":
//  let  mul = num1 * num2;

// console.log("mul =", mul);

// case "/":
//  let  divi= num1 /num2;

// console.log(" divi=", divi);

// }



// if(num1%2==0)
// {
// console.log("even");

// } else{
//     console.log("odd");
// }



// const sum = num1 + num2;

// console.log("Sum =", sum);





// const {log}=require('console')
// const http=require("http")
// const server =http.createServer((req,res)=>

// {
//     if(req.url=='/')

//         {
//     //    res.write("hello Home page")
//        res.end("hello Home page")
//     //    res.end()
// }
//       else if  (req.url=="/product")
//          {
//       res.write(JSON.stringify({product:["moblie","tv","laptop"]}))
//       res.end()
// }
//    else if(req.url=="/user") 
//   {
//    console.log(req.method);
   
//     // res.write()
//     res.end(JSON.stringify({user:["moblie112","tv","laptop"]}))
//   }
// else
//     {
//     res.write("invalid route route 404")
//     res.end()
//  }
//  }
//  )
// server .listen(3000,()=>{
//     console.log("severis running at port 3000");
// })


// const express =require('express')
// let app=express()

// app.get('/',(req,res)=>
// {
//     res.send("hello Home page")
// })

// app.get('/product',(req,res)=>
// {
//     res.send({product:["moblie","tv","laptop"]})
// })

// app.get('/user',(req,res)=>
// {
//     res.send({user:["moblie","tv","laptop"]})
// })


// app.listen(3000,()=>{
//     console.log("server is listen at port 3000");
    
// })


// const express =require('express')
// let app=express()

// const express =require('express')
// let app=express()

// const reqFilter=(req,res,next)=>{
//     if(!req.query.age)
//     {
//         res.send("please Enter your age")
//     }
//    else if(req.query.age<18)
//     {
//         res.send("age must be greater than 18")
//     }
//     else 
//     {
//         next()
//     }
// }

// //app.use(reqFilter)  //middleware  applcation ,router base

// app.get('/',(req,res)=>
// {
//     res.send("hello Home page")
// })
// app.get('/product',(req,res)=>
// {
//     res.send({product:["moblie","tv","laptop"]})
// })
// app.get('/user',reqFilter,(req,res)=>
// {
//     console.log(req.query.age); //http://localhost:3000/user?age=10
    
//     res.send({user:["moblie","tv","laptop"]})
// })
// app.listen(3000,()=>{
//     console.log("server is listen at port 3000");
    
// })

//url lana, get method ,next pr chalajye 


// const express =require('express')
// let app=express()

// const checkUrl=(req,res,next)=>{
// console.log("url"+req.url);
// console.log("Method"+req.method);


//         next()

// }
// app.use(checkUrl)
// app.get('/',(req,res)=>
// {
//     res.send("hello Home page")
// })
// app.get('/product',(req,res)=>
// {
//     res.send({product:["moblie","tv","laptop"]})
// })
// app.get('/user',(req,res)=>
// {
//     console.log(req.query.age); //http://localhost:3000/user?age=10
    
//     res.send({user:["moblie","tv","laptop"]})
// })
// app.listen(3000,()=>{
//     console.log("server is listen at port 3000");
    
// })



// const express =require('express')
// let app=express()

// const reqFilter=(req,res,next)=>{
// let to=req.query.token;
//     if(to)
//     {
//         res.send("please valid tokon")
//     }
//  else if(!req.query.to)
//     {
//         res.send("please valid tokon")

//         // next()
//     }
// }

// //app.use(reqFilter)  //middleware  applcation ,router base

// app.get('/',(req,res)=>
// {
//     res.send("hello Home page")
// })
// app.get('/product',(req,res)=>
// {
//     res.send({product:["moblie","tv","laptop"]})
// })
// app.get('/user',reqFilter,(req,res)=>
// {
//     console.log(req.query.age); //http://localhost:3000/user?age=10
    
//     res.send({user:["moblie","tv","laptop"]})
// })
// app.listen(3000,()=>{
//     console.log("server is listen at port 3000");
    
// })

// const express =require('express')
// let app=express()

// const reqFilter=(req,res,next)=>
// {
//     req.urlTime=new Date().toLocaleString()
 
//     next()
// }

// app.use(reqFilter) 
// //  //middleware  applcation ,router base

// app.get('/',(req,res)=>
// {
//     res.send(`real hit time ${ req.urlTime}`)
// })
// app.get('/product',(req,res)=>
// {
//         res.send(`real hit time ${ req.urlTime}`)

// })
// app.get('/user',reqFilter,(req,res)=>
// {
// //    console.log(req.query.age); //http://localhost:3000/user?age=10
    
//     res.send(`real hit time ${ req.urlTime}`)

// })
// app.listen(3000,()=>{
//     console.log("server is listen at port 3000");
    
// })

// let  a=20;
// let b=40;
// let sum=a+b
// console.log(sum);

// const a=10;
// const salary=100;
// const age=300;
// const isDeveloper=true;
// const user={
// name:"govind",
// year:"2001",
// city:"lucknow"

// }

// console.log(a);
// console.log(salary);
// console.log(age);
// console.log(isDeveloper);
// console.log(user.name);
// console.log(user.year);
// console.log(user.city);


// const a=10;
// const b=30;
// console.log(a+b);
// console.log(a*b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);

// console.log(a+b);


// const age=17;
// const has=true;
// console.log(age>=18 && has);


// const age=18;
// const country="india";
// console.log(age>=18);
// console.log(country==="india");
// console.log(age>=18 &&  "india");

// let score=18;
// let sum=score+2;
// console.log(sum);

// let age=28;
// if(age>19)
// {
//     console.log("your are eligible");
    
// }else if(age<19){
// console.log("you are not eligible");
// }
// else{
//     console.log("you are eligible1");
    
// }

// console.log('All Argument'process.argv);

// const fs=require("fs");
// console.log("file reaad");
// fs.writeFile('myfile.txt','this is file','utf8',(err)=>{
// if(err) throw err;
// console.log('file create sucessfully');
// })
// console.log("after file read");

// const fs=require("fs");
// console.log("file reaad");
// fs.readFile('myfile.txt','utf8','this is file',(err,data)=>{
// if(err) throw err;
// console.log('file create sucessfully'+data);
// })
// console.log("after file read");



// const fs = require("fs");

// console.log("file read");

// fs.readFile("myfile.txt", "utf8", (err, data) => {
//   if (err) throw err;

//   console.log("File content: " + data);
// });

// console.log("after file read");

const fs = require("fs").promises;
async function readFiles() {
  try {
    console.log("1. Starting to read files...");
   await fs.writeFile('file101.txt','Hello world', 'utf8');
   await fs.writeFile('file102.txt', 'Hello world','utf8');
    console.log('2. Files read successfully!');
    // return { data1, data2 };
  }
   catch (error) 
  {
    console.error('Error reading files:', error);
  }
}
readFiles();


// const fs = require("fs").promises;

// async function readFiles() {
//   try {
//     console.log("1. Starting to create files...");

//     await fs.writeFile("file11.txt", "Hello world", "utf8");
//     await fs.writeFile("file12.txt", "Hello world", "utf8");

//     console.log("2. Files created successfully!");

    // const data1 = await fs.readFile("file1.txt", "utf8");
    // const data2 = await fs.readFile("file2.txt", "utf8");

    // console.log("File 1:", data1);
    // console.log("File 2:", data2);

    // return { data1, data2 };
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// readFiles();





































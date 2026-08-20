// const fs=require('fs')
// console.log("before file read");
// fs.readFile('wdemo.txt','utf8',(err,data)=>
//  {
//  if(err)throw err;
//   console.log('file contents',data);
//   })
//   console.log('After file read');

// const fs=require('fs')
// fs.readFile("wdemo.txt",'utf8',(err,data)=>

// {
// if(err)throw err;
// console.log('file contents ',data);

// })
// console.log("affter file read");

// const fs=require('fs')
// console.log('start of blocking code');
// const data=fs.readFileSync('wdemo.txt','utf8');
// console.log('blocking operation completed ');
// console.log('start of non-blocking');
// fs.readFile('wdemo.txt','utf8',(err,data)=>
// {
// if(err)throw err;
// console.log('Non-Blobking operation completed');
// })
// console.log('this runs before the file is read');


// console.log('1,Start');
// process.nextTick(()=>console.log('2.next tick'));

// Promise.resolve().then(()=>console.log('3.Promise'));

// setTimeout(()=>console.log('4.Timeout'),0);

// setImmediate(()=>console.log('5 .Immediate'));
// console.log('6 .End');


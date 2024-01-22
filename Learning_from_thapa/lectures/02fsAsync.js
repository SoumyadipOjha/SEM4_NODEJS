const fs=require('fs');
// fs.writeFile('file.txt',"Soumyadip",(error)=>{
//     console.log("file is created");
//     console.log(error);
// });
// fs.appendFile('file.txt',"\nSoumyadip2",(error)=>{
//     console.log("task done");
//     console.log(error);
// });

fs.readFile('file.txt',"UTF-8",(error,data)=>{
    console.log(data);
})
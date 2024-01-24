const fs = require('fs');
// !creating a new file

fs.writeFileSync('read.txt',"Welcome in node JS");

// !overwrite

// fs.writeFileSync('read.txt',"Welcome in node JS,today ");

// !append content

// fs.appendFileSync('read.txt',"its your dad");

// !reading a data from file

// const buf_data=fs.readFileSync('read.txt');
// org_data=buf_data.toString();
// console.log(org_data);

// !rename a file

// fs.renameSync('read.txt','read-write.txt');

// !CRUD OPERATION



const fs=require('fs');
fs.mkdirSync('index.js');
fs.writeFileSync('bio.txt',"i am Soumya");
fs.appendFileSync('bio.txt',"\n adding more data to this file.");
const data=fs.readFileSync('bio.txt');
const org_data=data.toString();
console.log(org_data);
// fs.renameSync('bio.txt','mybio.txt');
// fs.unlinkSync('mybio.txt');

// countDown function
// function countDown(fromNumber){
//     console.log(fromNumber);
//     let nextNumber = fromNumber-1;
//     if(nextNumber>0){
//         countDown(nextNumber);
//     }
// }
// countDown(10);


// setTimeout,setInterval,setImmidiate
function welcome(){
    console.log("Welcome to timer code set time out");
}
function welcome1(){
    console.log("i am set interval");
}
function welcome2(){
    console.log("i am immidiate");
}
var id1=setTimeout(welcome,5000);//calling only once after 5 seconds

var id2=setInterval(welcome1,2000);//calling multiple time after 2 seconds

var id3=setImmediate(welcome2);//calling immidiately once; 


clearTimeout(id2);
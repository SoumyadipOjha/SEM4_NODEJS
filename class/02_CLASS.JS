a(20);
let x;
const y=9;
var z=70;

{{
    let x=9;
    console.log("I am inside a block my value is: ",x)
}{
    const y=10;
    console.log("I am inside a block my value is: ",y)
}
var z=90;}
z="Hello";
console.log("I am inside a block my value is: ",z)
function a(b){
    console.log("I am inside a block my value is: ",b);
}
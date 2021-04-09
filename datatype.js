
 let x="";
// console.log(typeof(x))

typeof "John"                // Returns "string"
typeof 3.14                  // Returns "number"
typeof true                  // Returns "boolean"
typeof false                 // Returns "boolean"
typeof x                     // Returns "undefined" (if x has no value)
typeof {name:'John', age:34} // Returns "object"
typeof  [1,2,3,4]    ;          // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function" 

console.log()   
let a = [0]
console.log(Array.isArray(a))

if(typeof(x)==undefined){
    x = "12"
}

let num ;
if(num===undefined){
    num=10
}

console.log("num value "+num)

var n = -3.33430;
var pandfloot = parseInt(Math.abs(n))
console.log(Math.abs(n))
console.log(pandfloot)

////
let foo = "sdsd"
// let c2 = foo  ==undefined?"it is NOT defined": "it is defined"
// let c3 = foo !==undefined?"it is NOT defined": "it is defined"
function afun() {
    if(foo !==undefined){
    return "if Not sd"
    }else{
        return foo
    }
    return 
}
console.log(afun())
// console.log(c2)
// console.log(c3)

// if(typeof foo !== 'undefined'){
//     console.log("fooo")
// }

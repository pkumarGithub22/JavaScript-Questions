//    Var

//   1) var Apne parent function me kahin bhi use ho sakta hai
//   2) var old JS me tha 
//   3) var Function Scoped hota hai
//   4) var adds itself to the window object

function abcd(){
    for(var i= 1; i<12; i++){
        console.log(i);
    }
    console.log(i);

}
abcd();



//                                          Let Const 

// Let Const New js me hai 
// let Braces scoped hota hai
// let const does't add in window object

 function ab(){
    for(let i=0; i<12; i++){
        console.log(i);

    }
    console.log(i)
 }
 ab();
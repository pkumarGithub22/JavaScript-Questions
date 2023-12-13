// Execution context box 

// execution context ka matlb jab bhi hum koi function chalayenge fnc apna khud ka ek imagenary container bna lega usme teen chezze hongi
//  1) variable 
//  2) function inside that parent function 
//  3) lexical environment

 function abc(){
    var a = 12;
    function def(){
        var b = 13;
        }
 }
 abc();
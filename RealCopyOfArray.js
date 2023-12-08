var arr = [1,2,3,5,6]

var b = [...arr];

console.log(arr);

b.forEach(function(val){
    console.log(val+2);
})

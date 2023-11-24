var str ="saare jahan se accha hindostan hamara"

var saved = str.split(" ")
.map (function(word){
    return word.split("").reverse().join("")
})
console.log(saved.join(" "))
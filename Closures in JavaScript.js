// Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.
var Person = function(pName){
    var name = pName;
  
    this.getName = function(){
      return name;
    }
  }
  
  var person = new Person("Neelesh");
  console.log(person.getName());
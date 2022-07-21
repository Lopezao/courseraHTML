(function(window) {
  var lopesGreeter = {};
  lopesGreeter.name = "Lopes";
  var greeting = "Hello ";
  lopesGreeter.sayHello = function (){
    console.log(greeting + lopesGreeter.name);
  }

  window.lopesGreeter = lopesGreeter;//This exposes the function to the outside

})(window)
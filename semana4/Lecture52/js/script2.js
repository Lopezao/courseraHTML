(function (window){
  var zumbiGreeter = {};
  zumbiGreeter.name = "ZUMBI";
  var greeting = "Hi ";
  zumbiGreeter.sayHi = function (){
    console.log(greeting + zumbiGreeter.name);
  }

  window.zumbiGreeter = zumbiGreeter;

})(window);
// Object literals and "this"
var literalCircle = {
  radius: 10,

  getArea: function (){
    var self = this;//we need this, because, at this point "this" is pointing to the constructure
    console.log(this);

    var increaseRadius = function(){// "this"in all functions within functions point toi the global, in this case the "first" "this" points to the Object literal like a contructure, but in the function within it points global

      self.radius = 20;// we use self, because we want to change the value of the radius on the constructure level, not on the global, we don't want window.radius = 20; we want the Literal circle Object literal's radius
    };
    increaseRadius();
    console.log(this.radius);
    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());
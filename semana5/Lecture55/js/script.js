// Event handling
document.addEventListener("DOMContentLoaded",
  function (event){

    function sayHello(event){
      console.log(event);

      this.textContent = "Said it!";//this point to the button.
      var name = document.getElementById("name").value;// O .value dá nos o input escrito mm
      var message = "<h2>Hello " + name + "!</h2>";


      //document.getElementById("content").textContent = message; // text content põe/lê texto na tag c o id que demos
      document.getElementById("content").innerHTML = message; //innerHTLM interpreta como se fosse html e não apenas texto, ou seja os comandos de html funcionam

      if (name === "student") {
        var title = document.querySelector("#title").textContent;

        title += " & Lovin' it!";

        document.querySelector("h1").textContent = title;//retrieves the first element it finds that corresponds to what we want
      }
      
    }

    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", sayHello);//sayHello points to button

    document.querySelector("body").addEventListener("mousemove",
      function (event) {
        if(event.shiftKey === true) {
          console.log("X: " + event.clientX);
          console.log("Y: " + event.clientY);
        }
      
      }
    );
      
  }
);



//document.querySelector("button").onclick = sayHello;





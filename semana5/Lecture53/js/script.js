// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello(){
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
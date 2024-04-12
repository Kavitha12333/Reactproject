//  var b =document.getElementById("text")
//  b.innerText="this is me"
//  var a = document.getElementsByClassName("text")[1]
// a.textContent="wow"
// var a = document.getElementsByClassName("text")[2]
// a.innerHTML="<h2>hello</h2>"
// // var a = document.getElementsByClassName("text")[2]
// // a.innerText="<h2>hello</h2>"
// var a = document.getElementsByClassName("text")[3]
// a.innerText="hello mam"
// getElementbytagname
let data = document.getElementsByTagName("p")
// data.textContent="sjf"
for(i=0; i<data.length; i++){
  data[i].textContent="change values"
}
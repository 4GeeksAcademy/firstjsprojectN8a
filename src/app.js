import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";



//window.onload = function() {
  //write your code here
  //document.querySelector("#excuse").innerHTML = who[Math.floor(Math.random() * who.length)] + " " + action[Math.floor(Math.random() * action.length)] + " " + what[Math.floor(Math.random() * what.length)] + " " + when[Math.floor(Math.random() * when.length)]};
  window.onload = function() {
  let article = ["A" , "My", "The"];
  let agent = ["pirate", "grandfather", "president", "cat", "dragon", "robot", "egg"];
  let action = ["crashed", "destroyed", "fell off", "banned"];
  let what = ["my homework", "my car", "my phone", "my desk", "my pencil"];
  let where = ["in the classroom", "in my room", "over a cliff", "in Fiji"]
  let when = ["before class", "while I was asleep", "during my workout", "five minutes ago", "right before I left"];


let rdm1 = Math.floor(Math.random () * article.length);
let rdm2 = Math.floor(Math.random () * agent.length);
let rdm3 = Math.floor(Math.random () * action.length);
let rdm4 = Math.floor(Math.random () * what.length);
let rdm5 = Math.floor(Math.random () * where.length);
let rdm6 = Math.floor(Math.random () * when.length);

// let random1 = Math.floor(Math.random () * article.length);
// let random2 = Math.floor(Math.random () * agent.length);
// let random3 = Math.floor(Math.random () * action.length);
// let random4 = Math.floor(Math.random () * what.length);
// let random5 = Math.floor(Math.random () * where.length);
// let random6 = Math.floor(Math.random () * when.length);

//document.querySelector("#excuse").innerHTML = article[Math.floor(Math.random() * article.length)] + " " + agent[Math.floor(Math.random() * agent.length)] + " " + action[Math.floor(Math.random() * action.length)] + " " + what[Math.floor(Math.random() * what.length)] + " " + where[Math.floor(Math.random() * where.length)] + " " + when[Math.floor(Math.random() * when.length)];
document.querySelector("#excuse").innerHTML = article [rdm1] + " " + agent [rdm2] + " " + action [rdm3] + " " + what [rdm4] + " " + where [rdm5] + " " + when [rdm6]}
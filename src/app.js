/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello from the console! ");
};

let generateExcuse = function() {
  let who = ["Carlos", "Cristiano Ronaldo", "His max steel", "My grandpa"];
  let action = ["ate", "smashed", "crushed", "broke"];
  let what = ["my cantv modem", "my keys", "my car"];
  let when = [
    "before the javascript class",
    "right on time",
    "when I finished",
    "during my breakfast",
    "while I was meditating in my project"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};

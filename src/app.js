/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Create the "parts of the sentence" arrays
  let who = ["The dog", "My grandma", "The mailman", "The bird"];
  let action = ["ate", "threw away", "mailed", "stole"];
  let what = ["my homework", "my cellphone", "the car"];
  let when = ["yesterday!", "this morning!", "last week!"];

  //combine random elements in each array to form a sentence
  // create function to select element in array
  function selectArrayElement(arrayName, arrayLength) {
    //generate a random number based on length of arrayName
    let randomNumber = Math.floor(Math.random() * arrayLength);

    //asign an element from arrayName to be returned
    let selectedElement = arrayName[randomNumber];
    return selectedElement;
  }

  let randomWho = selectArrayElement(who, who.length);
  let randomAction = selectArrayElement(action, action.length);
  let randomWhat = selectArrayElement(what, what.length);
  let randomWhen = selectArrayElement(when, when.length);

  //string templates
  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  //retrieving html elements to manipulate
  const htmlElement = document.querySelector(".excuse");
  htmlElement.innerHTML = excuse;

  const refreshBtn = document.getElementById("btnRefresh");

  function handleClick() {
    window.location.reload();
  }

  refreshBtn.addEventListener("click", handleClick);

  let buttonwords = "Click me for a new excuse!";
  const buttonElement = document.querySelector(".buttonMessage");
  buttonElement.innerHTML = buttonwords;
};

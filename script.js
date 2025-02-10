function changetoDarkTheme() {
  let bodyColor = document.querySelector("body");
  let buttonText = document.querySelector(".btnDarker");
  if (bodyColor.classList.contains("darker")) {
    bodyColor.classList.remove("darker");
    buttonText.classList.remove("darker-button");
    buttonText.innerHTML = "Too Bright?";
  } else {
    bodyColor.classList.add("darker");
    buttonText.classList.add("darker-button");
    buttonText.innerHTML = "Too Dark?";
  }
}
let darker = document.querySelector(".btnDarker");
darker.addEventListener("click", changetoDarkTheme);

/*1. Ask the user for Exeperience of Muay Thai. Yes - Advance. No - Beginner. Display info based on experience*/
function askMuayThaiLevel() {
  let fName = askForName();
  let level = prompt("Did you learn Muay Thai before? (yes or no)");
  level = level.trim();
  level = level.toLowerCase();
  let levelDisplayInter = document.querySelector(".p-display-intermedlevel");
  let levelDisplayBeginner = document.querySelector(".p-display-beginnerlevel");
  if (level === "yes") {
    levelDisplayInter.style.display = "block";
  } else {
    levelDisplayBeginner.style.display = "block";
  }
}

function askForName() {
  let fName = prompt("May I have your beautiful name?");
  fName = String(fName).charAt(0).toUpperCase() + String(fName).slice(1);
  return fName;
}

let buttonClick = document.querySelector(".btnLearn");
buttonClick.addEventListener("click", askMuayThaiLevel);


let score = {
  won: 0,
  loose: 0,
  tie: 0,
};
let computerchoice;

function GenComChoice() {
  let randomnumber = Math.floor(Math.random() * 3);
  if (randomnumber === 0) {
    computerchoice = "Stone";
  } else if (randomnumber === 1) {
    computerchoice = "Paper";
  } else {
    computerchoice = "Scissor";
  }
  console.log("Computer choice is " + computerchoice);
}

function GetResult(UserMove, ComputerMove) {
  let result;
  if (UserMove === "Stone") {
    if (ComputerMove === "Paper") {
      score.loose++;
      return "Computer Won";
    } else if (ComputerMove === "Stone") {
      score.tie++;
      return "Match Tied";
    } else {
      score.won++;
      return "User Won";
    }
  }
  if (UserMove === "Paper") {
    if (ComputerMove === "Paper") {
      score.tie++;
      return "Match Tied";
    } else if (ComputerMove === "Stone") {
      score.won++;
      return "User Won";
    } else {
      score.loose++;
      return "Computer Won";
    }
  }
  if (UserMove === "Scissor") {
    if (ComputerMove === "Paper") {
      score.won++;
      return "User Won";
    } else if (ComputerMove === "Stone") {
      score.loose++;
      return "Computer Won";
    } else {
      score.tie++;
      return "Match Tied";
    }
  }
  return "Unknown Result";
}

function resetGame() {
  score = {
    won: 0,
    loose: 0,
    tie: 0,
  };
  localStorage.clear();
  document.getElementById("wins").innerText = score.won;
  document.getElementById("losses").innerText = score.loose;
  document.getElementById("ties").innerText = score.tie;
  document.getElementById("game-result").innerText = '';
  document.getElementById("chosen-images").innerHTML = '';

  console.log("Game has been reset");
}

function ShowResult(UserMove, ComputerMove, Result) {
  localStorage.setItem("score", JSON.stringify(score));
  console.log(score);

  document.getElementById("game-result").innerText = 
    "You have chosen " + UserMove + ". Computer has chosen " + ComputerMove + ". " + Result;

  document.getElementById("chosen-images").innerHTML = `
    <img src="${UserMove.toLowerCase()}.jpg" alt="${UserMove}" class="choice-image">
    <img src="${ComputerMove.toLowerCase()}.jpg" alt="${ComputerMove}" class="choice-image">
  `;

  document.getElementById("wins").innerText = score.won;
  document.getElementById("losses").innerText = score.loose;
  document.getElementById("ties").innerText = score.tie;
}

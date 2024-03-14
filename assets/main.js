// # ✅ Aufgabenstellung

// - Jede:r hat in seinem Leben schon einmal "Rock, Paper, Scissors" (Schnick, Schnack, Schnuck) gespielt. 
// Die Regeln sind also schon bekannt.
// - Sobald du deine Auswahl getroffen und auf ein Bild geklickt hast (Schere, Stein oder Papier), sollte die Funktion ausgelöst werden.
// - Lasse dir im HTML anzeigen, was der/die User:in und der Computer jeweils ausgewählt haben, sowie das Ergebnis.
// - Außerdem soll es einen Reset Button geben, der das Spiel neu starten lässt.
// - Das Design im Anhang ist nur ein Vorschlag, hier kannst du gerne kreativ werden.

// * todo
// 1. Variable definieren / 3 Variable - Scheere, Stein, Papier
// 2. Outputs definieren / YOU Choise, CPU Choise, RESULT
// 3. Elemente aus dem HTML holen und ansprechen queryselector
// 4. Wenn ich etwas in HTML mit Javascript schreibe, benutze ich inner.html 
// Info 


// wenn = if / dann = else if / oder = else



  // Ausgabefelder
  const youOutput = document.querySelector(".you");
  const enemyOutput = document.querySelector(".enemy");
  const resultOutput = document.querySelector(".result");
  

  function startGame() {
    const enemy = Math.floor(Math.random()* 3); 
    const you = 1;


if (enemy === you)  { 
  enemyOutput.innerHTML = "rock"; 
  resultOutput.innerHTML = "draw";

} else if (enemy === 2) {
  enemyOutput.innerHTML = "scissors";
  resultOutput.innerHTML = "Computer Wins";

} else if (enemy === 3) {
  enemyOutput.innerHTML = "paper";
  resultOutput.innerHTML = "You Win";

} else {
  resultOutput.innerHTML = "nick,nack,nuck.";
}
  }

function startGame() { 
  const enemy = Math.floor(Math.random()* 3); 
  const you = 2;
  youOutput.innerHTML = "scissors";

if (enemy === you )  { 
enemyOutput.innerHTML = "scissors"; 
resultOutput.innerHTML = "draw";

} else if (enemy === 1) {
enemyOutput.innerHTML = "rock";
resultOutput.innerHTML = "Computer Wins";


} else if (enemy === 3) {
enemyOutput.innerHTML = "paper";
resultOutput.innerHTML = "You Win";

} else {
resultOutput.innerHTML = "nick,nack,nuck.";
}
};


function startGame() {
  const enemy = Math.floor(Math.random()* 3); 
  const you = 3;
  youOutput.innerHTML = "paper";
  

if (enemy === you )  { 
enemyOutput.innerHTML = "paper"; 
resultOutput.innerHTML = "draw";

} else if (enemy === 1) {
enemyOutput.innerHTML = "scissors";
resultOutput.innerHTML = "Computer Wins"


} else if (enemy === 2) {
enemyOutput.innerHTML = "rock";
resultOutput.innerHTML = "You Win"
} else {
resultOutput.innerHTML = "nick,nack,nuck.";
}
};


function restart() {
  youOutput.innerHTML = "";
  enemyOutput.innerHTML = "";
  resultOutput.innerHTML = "";
};
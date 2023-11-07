//Der Hauptunterschied besteht darin, dass For-Loops für eine festgelegte Anzahl von Durchläufen verwendet werden, während While-Loops flexibler sind und von einer Bedingung gesteuert werden.

console.log("%c aufgabe lev1_3: while loop Hallo World", "color:red");
let counter = 0;

while (counter <= 10) {
  console.log("Hallo World " + counter);
  counter++;
}

console.log("%c aufgabe Loops-Level-1_7", "color:red");
let i = 1;

do {
  document.write(i + "<br>");
  i++;
} while (i <= 5);
console.log("%c aufgabe lev1_8: do while", "color:red");
let num = 2;

do {
  document.write(num + "<br>");
  num += 2;
} while (num <= 20);
console.log("%c Projekt-1", "color:yellow");
let morseAlphabet = [
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "0", morseCode: "-----" },
  { letter: " ", morseCode: "    " },
  { letter: "A", morseCode: ".-" },
  { letter: "B", morseCode: "-..." },
  { letter: "C", morseCode: "-.-." },
  { letter: "D", morseCode: "-.." },
  { letter: "E", morseCode: "." },
  { letter: "F", morseCode: "..-." },
  { letter: "G", morseCode: "--." },
  { letter: "H", morseCode: "...." },
  { letter: "I", morseCode: ".." },
  { letter: "J", morseCode: ".---" },
  { letter: "K", morseCode: "-.-" },
  { letter: "L", morseCode: ".-.." },
  { letter: "M", morseCode: "--" },
  { letter: "N", morseCode: "-." },
  { letter: "O", morseCode: "---" },
  { letter: "P", morseCode: ".--." },
  { letter: "Q", morseCode: "--.-" },
  { letter: "R", morseCode: ".-." },
  { letter: "S", morseCode: "..." },
  { letter: "T", morseCode: "-" },
  { letter: "U", morseCode: "..-" },
  { letter: "V", morseCode: "...-" },
  { letter: "W", morseCode: ".--" },
  { letter: "X", morseCode: "-..-" },
  { letter: "Y", morseCode: "-.--" },
  { letter: "Z", morseCode: "--.." },
];

function textToMorse(text) {
  text = text.toUpperCase();
  let morseText = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === " ") {
      morseText += " ";
    } else {
      for (let j = 0; j < morseAlphabet.length; j++) {
        if (morseAlphabet[j].letter === char) {
          morseText += morseAlphabet[j].morseCode + " ";
          break;
        }
      }
    }
  }

  return morseText;
}

function encryptText() {
  const inputText = document.getElementById("inputText").value;
  const morseCode = textToMorse(inputText);
  document.getElementById("outputText").textContent = morseCode;
}

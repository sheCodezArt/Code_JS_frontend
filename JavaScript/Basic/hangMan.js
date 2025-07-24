// function displayM() {
//   document.getElementById("cover").innerHTML = "M";
// }

// function displayA() {
//   document.getElementById("cover").innerHTML = "A";
// }

// function displayC() {
//   document.getElementById("cover").innerHTML = "C";
// }

// function displayT() {
//   document.getElementById("cover").innerHTML = "T";
// }

// function displayS() {
//   document.getElementById("cover").innerHTML = "S";
// }

let letters = '';

function displayLetter(letter) {
  if (letters.length < 3) {
    letters += letter;
    document.getElementById("cover").innerHTML = letters;
  }
}

document.getElementById('M').onclick = function() { displayLetter('M') };
document.getElementById('A').onclick = function() { displayLetter('A') };
document.getElementById('C').onclick = function() { displayLetter('C') };
document.getElementById('T').onclick = function() { displayLetter('T') };
document.getElementById('S').onclick = function() { displayLetter('S') };

document.getElementById('reset').onclick = function() {
  letters = '';
  document.getElementById("cover").innerHTML = letters;
};
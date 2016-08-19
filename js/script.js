var convertedT;

console.log('Hello, front end');

document.getElementById('submit').addEventListener('click', getInput);

function getInput() {
  convertedT = document.getElementById("input").value;
  convert();
  printTemp()
}

function convert() {
  if (document.getElementById('fahrenheit').checked === true){
    convertedT=(convertedT-32)*5/9;
    console.log(convertedT);
  } else {
  convertedT=(convertedT*1.8)+32;
  console.log(convertedT);
  }
}

function printTemp () {
  document.getElementById("convertedtemp").textContent = convertedT
}

document.getElementById('clear').addEventListener('click', clear);

function clear () {
  document.getElementById("input").value = 0;
  document.getElementById("convertedtemp").textContent = "Enter Temperature";
}

clear()

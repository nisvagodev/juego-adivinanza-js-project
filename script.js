let randomNumber = Math.floor(Math.random() * 100) + 1;
let numberInput = document.getElementById("numberInput");
let message = document.getElementById("message");
let intento = document.getElementById("intento");
let intentos = 0;

function checkResult() {
  intentos++;
  intento.textContent = intentos;
  let intNumberInput = parseInt(numberInput.value);

  if (intNumberInput < 1 || intNumberInput > 100 || isNaN(intNumberInput)) {
    message.textContent = "Por favor, ingresa un número entre 1 y 100.";
    message.style.color = "red";
  } else if (intNumberInput === randomNumber) {
    message.textContent = "¡Felicidades! Has adivinado el número.";
    message.style.color = "green";
    numberInput.disabled = true;
  } else if (intNumberInput < randomNumber) {
    message.textContent = "¡Más alto! Ingresa un número mayor al ingresado.";
    message.style.color = "red";
  } else {
    message.textContent = "¡Más bajo! Ingresa un número menor al ingresado.";
    message.style.color = "red";
  }
}

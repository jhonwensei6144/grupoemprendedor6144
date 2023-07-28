// Generar el número secreto entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinarNumero() {
    const intento = parseInt(document.getElementById("intent").value);
    intentos++;

    if (Number.isNaN(intento)) {
        document.getElementById("mensaje").textContent = "Por favor, ingresa un número válido.";
    } else {
        if (intento === numeroSecreto) {
            document.getElementById("mensaje").textContent = `¡Felicidades! ¡Has adivinado el número en ${intentos} intentos!`;
            document.getElementById("intent").disabled = true;
        } else if (intento < numeroSecreto) {
            document.getElementById("mensaje").textContent = "El número secreto es mayor. ¡Sigue intentándolo!";
        } else {
            document.getElementById("mensaje").textContent = "El número secreto es menor. ¡Sigue intentándolo!";
        }
        document.getElementById("intentos").textContent = `Intentos: ${intentos}`;
    }
}

let votosnana = 0;
let votostaku = 0;
let votosnobu = 0;
let totalVotos = 0;

function votar(opcion) {
    if (opcion === 'nana') {
        votosnana++;
        document.getElementById("votos-nana").textContent = votosnana;
    } else if (opcion === 'taku') {
        votostaku++;
        document.getElementById("votos-taku").textContent = votostaku;
    } else if (opcion === 'nobu') {
        votosnobu++;
        document.getElementById("votos-nobu").textContent = votosnobu;
    }

    totalVotos++;

    alert("¡Gracias por tu voto!");

    if (totalVotos % 5 === 0) {
        console.log("Total de votos acumulados: " + totalVotos);
    }
}
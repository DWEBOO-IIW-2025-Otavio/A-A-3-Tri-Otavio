const nome = 'Otávio';
const anonas = 2009;
const cidade = 'assis'
const anoatu = 2026;

const ida = anoatu - anonas;

const sl = `${nome} mora em ${cidade} e tem ${ida} anos.`;

console.log(sl);
document.getElementById("resultado").textContent = sl;
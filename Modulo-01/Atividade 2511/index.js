const num = Math.floor(Math.random() * 10) + 1;
const tenta = Number(prompt("que chuta quantas vezes"));

for (let i = 1; i <= tenta; i++) {
  const tentativa = Number(prompt("adivinha 1 a 10"));

  if (tentativa === num) {
    alert(`Acerto em ${i - 1}`);
    break;
  }

  if (i === tenta) {
    alert(`Burro, erra ${num}.`);
  } else {
    alert("Burro");
  }
}
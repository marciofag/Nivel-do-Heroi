// Variáveis
let nomeDoHeroi = "Marcioman"; // Você pode substituir pelo nome do seu herói
let experienciaDoHeroi = 7500; // Você pode substituir pela XP do seu herói

// Estrutura de decisão
let nivelDoHeroi;

if (experienciaDoHeroi < 1000) {
  nivelDoHeroi = "Ferro";
} else if (experienciaDoHeroi <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (experienciaDoHeroi <= 5000) {
  nivelDoHeroi = "Prata";
} else if (experienciaDoHeroi <= 7000) {
  nivelDoHeroi = "Ouro";
} else if (experienciaDoHeroi <= 8000) {
  nivelDoHeroi = "Platina";
} else if (experienciaDoHeroi <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (experienciaDoHeroi <= 10000) {
  nivelDoHeroi = "Imortal";
} else {
  nivelDoHeroi = "Radiante"; 
}

// Saída
console.log(`O nosso Herói ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);

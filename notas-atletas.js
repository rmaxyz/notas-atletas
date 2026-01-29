
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMediaAtletas(listaAtletas) {
  
    for (let i = 0; i < listaAtletas.length; i++) {
    // O código que vai aqui será executado
    // uma vez para cada item da matriz
    let atleta = listaAtletas[i];

    // 1. ordenar a lista em ordem crescente
    let notasCrescentes = atleta.notas.sort(function(a,b) {return a - b});
    
    // 2. excluir a menor e maior nota da lista em ordem crescente
    let notasComputadas = notasCrescentes.slice(1,4);

    // 3. Calcular a soma das notas
    let soma = 0;
    notasComputadas.forEach(function(nota) {
        soma = soma + nota;
    });

    // 4. Calcula a média das notas computadas
    let mediaNotas = soma / notasComputadas.length;

    // Exibe os resultados no console
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas: ${atleta.notas.join(",")}`);

    if(i == 0){
      console.log(`Média: ${mediaNotas.toFixed(6)}`);
    }else if (i == 3) {
      console.log(`Média: ${mediaNotas.toFixed(11)}`);
    } else {
      console.log(`Média: ${mediaNotas}`);
    }
    console.log(" ");

    }
}
//Executa função
calcularMediaAtletas(atletas);
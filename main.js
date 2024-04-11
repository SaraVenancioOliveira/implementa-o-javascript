const dataAtual = new Date();
let dataNiver = prompt("Data do próximo niver");
dataNiver= new Date(dataNiver + "T23:59:59");
let diasQueFaltam= math.floor((dataNiver-dataAtual)/86400000);
document.querySelector("#dias_restantes").textContent=diasQueFaltam;

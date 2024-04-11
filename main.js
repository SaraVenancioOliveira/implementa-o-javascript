const dataAtual= nerv Date();
    let dataNiver=prompt("Data do próximo niver");
    dataniver=nerv Date(dataniver + "T23:59:59");
    let diasQueFaltam=mathfloor((dataNiver-dataAtual));
    document.querySelector(#dias_restantes).textContent=diasQueFaltam;

const hoje = new Date();

console.log(dateFns.format(hoje, "DD/MM/YYYY"));

const hojeNaoTaoHoje = dateFns.addDays(hoje, 5);

console.log("Adicionando 5 dias", dateFns.format(hojeNaoTaoHoje, "DD/MM/YYYY"));
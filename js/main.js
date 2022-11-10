let prezzoBiglietto=0.21;

let sconto20Percento=20;

let sconto40Percento=40;

let kmDaPercorrere=prompt("kilometri da percorrere");
kmDaPercorrere=parseFloat(kmDaPercorrere);

let prezzoTotaleBiglietto=prezzoBiglietto * kmDaPercorrere;
prezzoTotaleBiglietto= parseFloat(prezzoTotaleBiglietto);

console.log(prezzoTotaleBiglietto);

let eta=(prompt("inserisci la tua età"));




function percentage(num, per)
{
  return (num/100)*per;
}
if(eta<18){
    let sconto =percentage(prezzoTotaleBiglietto,sconto20Percento).toFixed(2);
    document.getElementById("costo").innerHTML=(prezzoTotaleBiglietto-sconto).toFixed(2);
}else if(eta>65){
    let sconto =percentage(prezzoTotaleBiglietto,sconto20Percento).toFixed(2);
    document.getElementById("costo").innerHTML=(prezzoTotaleBiglietto-sconto).toFixed(2);
}else{
    document.getElementById("costo").innerHTML= prezzoTotaleBiglietto;
}

// da non modificare
let prezzoBiglietto=0.21;

let sconto20Percento=20;

let sconto40Percento=40;
//

let kmDaPercorrere=document.getElementById("kilometri");
let eta=document.getElementById("età");

document.getElementById("bottone").onclick = etaCheck;
function check(){
    document.getElementById("biglietto").innerHTML=kmDaPercorrere.value;
    console.log(kmDaPercorrere);
}
function percentage(num, per)
{
  return (num/100)*per;
}
function etaCheck(){
    let prezzoTotaleBiglietto=prezzoBiglietto * kmDaPercorrere.value;
    prezzoTotaleBiglietto= parseFloat(prezzoTotaleBiglietto);
    let checkEta = eta.value;
if(checkEta<18){
    let sconto =percentage(prezzoTotaleBiglietto,sconto20Percento).toFixed(2);
    document.getElementById("biglietto").innerHTML=(prezzoTotaleBiglietto-sconto).toFixed(2);
}else if(checkEta>65){
    let sconto =percentage(prezzoTotaleBiglietto,sconto20Percento).toFixed(2);
    document.getElementById("biglietto").innerHTML=(prezzoTotaleBiglietto-sconto).toFixed(2);
}else{
    document.getElementById("biglietto").innerHTML= prezzoTotaleBiglietto.toFixed(2);
}
}

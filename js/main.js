// da non modificare
let prezzoBiglietto=0.21;

let sconto20Percento=20;

let sconto40Percento=40;
//
let nome=document.getElementById("valoreNome");
let cognome=document.getElementById("valoreCognome");

let kmDaPercorrere=document.getElementById("kilometri");
let eta=document.getElementById("età");

document.getElementById("bottone").onclick =generaBiglietto;
function generaBiglietto(){
    document.getElementById("Nomebiglietto").innerHTML="Nome: "+nome.value;
    document.getElementById("Cognomebiglietto").innerHTML="Cognome: "+cognome.value;
    document.getElementById("etàbiglietto").innerHTML="Età: "+eta.value;

    
    etaCheck();
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
    document.getElementById("Prezzobiglietto").innerHTML="Prezzo: "+(prezzoTotaleBiglietto-sconto).toFixed(2);
}else if(checkEta>=65){
    let sconto =percentage(prezzoTotaleBiglietto,sconto20Percento).toFixed(2);
    document.getElementById("Prezzobiglietto").innerHTML="Prezzo: "+(prezzoTotaleBiglietto-sconto).toFixed(2);
}else{
    document.getElementById("Prezzobiglietto").innerHTML="Prezzo: "+ prezzoTotaleBiglietto.toFixed(2);
}
}

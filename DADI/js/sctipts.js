
const min = 1;
const max = 6;


const nmGiocatore = Math.floor(Math.random() * (max - min + 1) ) + min;
console.log('nmGiocatore', nmGiocatore, typeof nmGiocatore)

const nmComputer = Math.floor(Math.random() * (max - min + 1) ) + min;
console.log('nmComputer', nmComputer, typeof nmComputer)

if(nmGiocatore > nmComputer){
    alert('hai vinto')
    console.log('hai vinto bro')
}
else if(nmGiocatore < nmComputer){
    alert('hai perso')
    console.log('hai perso bro')
}
else{
    alert('pareggio')
    console.log('pareggio bro')
}
/* 

CREA ARRAY CON MAIL PREDEFINITE
CHIEDI ALL'UTENTE L'EMAIL
VERIFICO
SE
 -- L'Email è un valore true all'interno dell'array
ALLORA
  -- MOSTRA RISULTATO POSITIVO
 
ALTRIMENTI
 -- Stampa in pagina verifica negativa

*/




const userEmail = prompt('Inserisci la tua mail');
console.log('userEmail', userEmail, typeof userEmail);


const emailArray = [
    'pippo@gmail.com',
    'pluto@gmail.com',
    'paperino@gmail.com',
    'pappapero@gmail.com'
];

let isPresent = 0;


for (let i = 0; i < emailArray.length; i++) {

    if (emailArray[i] == userEmail){
        console.log('puoi entrareh');
        
        isPresent = 1;
        
        i = emailArray.length;
    }
}

if(isPresent == 0){
    console.log('Non puoi entrareeeh!');
}




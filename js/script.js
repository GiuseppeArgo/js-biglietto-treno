// RACCOLTA DATI

// Con un prompt chiediamo al cliente i km che vuole porcorrere

let userKm = prompt ("Quanti Km vuoi percorrere?"); //string

userKm = parseInt(userKm);

console.log(userKm, typeof userKm);

// Con un prompt chiediamo al cliente l'età del passeggero

let userAge = prompt ("Quanti anni hai?"); //string

userAge = parseInt(userAge);

console.log(userAge, typeof userAge);

//PARTE LOGICA 

// Calcoliamo il prezzo del biglietto in base ai km

const priceKm = userKm * 0.21;

console.log(priceKm, typeof priceKm)

//Calcoliamo lo sconto

let discount = "";

if (userAge < 18){
    discount = priceKm * 0.20
    console.log(discount, typeof discount);
} else if (userAge > 65) {
    discount = priceKm * 0.40
    console.log(discount,typeof discount);
} else {
    discount = 0;
}

//Calcoliamo il prezzo del biglietto

const price = priceKm - discount;

console.log (price, typeof price)

//OUTPUT

//Preparo il messaggio da stampare in pagina

const result = `Il prezzo è ${price.toFixed(2)} €`;

console.log(result, typeof result)


//Stampiamo il risultato in pagine

document.getElementById("price") .innerHTML = (result);


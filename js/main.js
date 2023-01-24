// 1.chiedi all' utente nome e cognome
// 2.chiedi all' utente il numero di km che vuole percorrere
// 3.chiedi se è minorenne, maggiorenne, over65
// 4.calcola il prezzo intero del viaggio
// 5. se passeggero è minorenne applica sconto 20%
// 6. se passeggero è over65 applica sconto 40%
// 7. altrimenti il prezzo del biglietto è intero

// PREZZO PER KM 
const price_per_km = 0.21;
const discount_20 = 0.2;
const discount_40 = 0.4;

// CHIEDI NOME 
let nome_cognome_input_el = document.getElementById('nome_cognome');
let nome_cognome = nome_cognome_input_el.value;

// CHIEDI KM 
let kilometri_input_el = document.getElementById('kilometri');
let kilometri = parseInt(kilometri_input_el.value);

// CHIEDI ETA'
let age_input_el = document.getElementById('age');
let age = age_input_el.value;
console.log("age " + age);
// PREZZO INTERO 
let total_price = price_per_km * kilometri;
let final_price = total_price
// console.log('prezzo base ' + final_price);


const calculate_button = document.querySelector(".btn-primary")
console.log(calculate_button);
calculate_button.addEventListener(
    'click',
    function () {
        if (isNaN(kilometri)) {
            alert("immettere correttamente i Km da percorrere")
        }
        else {
            switch (age) {
                case "maggiorenne":
                    final_price = total_price
                    console.log('prezzo maggiorenne base ' + final_price);
                    document.getElementById('offerta').innerHTML = ('Biglietto standard');
                    break;

                case "minorenne":
                    final_price = (total_price - (total_price * discount_20));
                    console.log('prezzo minorenne ' + final_price);
                    document.getElementById('offerta').innerHTML = ('Offerta Minorenni');
                    break;

                case "over65":
                    final_price = (total_price - (total_price * discount_40));
                    console.log('prezzo over65: ' + final_price);
                    document.getElementById('offerta').innerHTML = ('Offerta Over65');
                    break;
            }
            document.getElementById('final_price').innerHTML = (final_price.toFixed(2) + '€');
            document.getElementById('passeggero').innerHTML = nome_cognome;
        }
    }
)



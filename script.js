// Funzione per calcolare la percentuale
function calcolaPercentuale() {
    const numero = parseFloat(document.getElementById('numero').value);
    const percentuale = parseFloat(document.getElementById('percentuale').value);
    const risultato = (numero * percentuale) / 100;
    document.getElementById('risultatoPercentuale').textContent = risultato.toFixed(2);
}

// Funzione per calcolare il MCD (Massimo Comune Divisore)
function calcolaMCD() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    while (numero2) {
        let t = numero2;
        numero2 = numero1 % numero2;
        numero1 = t;
    }
    document.getElementById('risultatoMCD').textContent = numero1;
}

// Funzione per calcolare la media aritmetica
function calcolaMedia() {
    const valore1 = parseFloat(document.getElementById('valore1').value);
    const valore2 = parseFloat(document.getElementById('valore2').value);
    const media = (valore1 + valore2) / 2;
    document.getElementById('risultatoMedia').textContent = media.toFixed(2);
}

// Funzione per risolvere un'equazione lineare ax + b = 0
function equazioneLineare() {
    const a = parseFloat(document.getElementById('valoreA').value);
    const b = parseFloat(document.getElementById('valoreB').value);

    if (a === 0) {
        if (b === 0) {
            document.getElementById('risultatoEquazioneLineare').textContent = 'L\'equazione ha infinite soluzioni';
        } else {
            document.getElementById('risultatoEquazioneLineare').textContent = 'L\'equazione non ha soluzioni';
        }
    } else {
        const x = -b / a;
        document.getElementById('risultatoEquazioneLineare').textContent = 'x = ' + x.toFixed(2);
    }
}

// Funzione per convertire metri a chilometri
function convertiMetriChilometri() {
    const metri = parseFloat(document.getElementById('metri').value);
    const chilometri = metri / 1000;
    document.getElementById('risultatoConversione').textContent = chilometri.toFixed(3) + ' km';
}

// Funzione per calcolare gli interessi semplici
function calcolaInteressi() {
    const capitale = parseFloat(document.getElementById('capitale').value);
    const tasso = parseFloat(document.getElementById('tasso').value);
    const anni = parseFloat(document.getElementById('anni').value);
    const interesse = (capitale * tasso * anni) / 100;
    document.getElementById('risultatoInteressi').textContent = 'Interessi: €' + interesse.toFixed(2);
}

// Funzione per calcolare il BMI
function calcolaBMI() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altezza = parseFloat(document.getElementById('altezza').value);
    const bmi = peso / (altezza * altezza);
    document.getElementById('risultatoBMI').textContent = bmi.toFixed(2);
}

// Funzione per generare una password casuale
function generaPassword() {
    const lunghezza = 12;
    const caratteri = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0; i < lunghezza; i++) {
        const carattereCasuale = Math.floor(Math.random() * caratteri.length);
        password += caratteri.charAt(carattereCasuale);
    }
    document.getElementById('passwordGenerata').textContent = password;
}



function calcShipping() {
    const valor = Number(document.getElementById('valor').value);
    const peso = Number(document.getElementById('peso').value);

    var despacho = Number.parseFloat("10.15")
    var pedagio = Number.parseFloat(pedag(peso))
    var frete = Number.parseFloat(classification(peso))
    var fretevalor = Number(valor * 0.23) / 100
    var gris = parseFloat(valor * 0.17) / 100
    var imposto = parseFloat(despacho + pedagio + frete + fretevalor + gris) * 13.65 / 100

    let isValid = validateCalc(valor, peso);

    if (isValid == true) {
        const result = Number(frete + despacho + pedagio + fretevalor + gris + imposto).toFixed(2);
        document.getElementById('result').innerHTML = `O valor do frete é de \u{1F449} R$ ${result}`
    }
}

function pedag(peso) {
    if (peso <= 100) {
        return pedagio = 3.93;
    }
    else if (peso > 100) {
        return pedagio = 7.86;
    }
}

function validateCalc(valor, peso) {
    if (!valor || !peso) {
        alert('Preencha os campos obrigatórios para efetuar o cálculo');
        return false;
    }else if(valor < 0 || peso < 0){
        alert('Insira um valor válido');
        return false;
    }
    return true;
}

function classification(peso) {
    if (peso <= 20) {
        return frete = 25.74;
    }
    else if (peso > 20 && peso <= 40) {
        return frete = 32.02;
    }
    else if (peso > 40 && peso <= 60) {
        return frete = 33.96;
    }
    else if (peso > 60 && peso <= 80) {
        return frete = 39.77;
    }
    else if (peso > 80 && peso <= 100) {
        return frete = 42.39;
    }
    else if (peso > 100 && peso <= 120) {
        return frete = 45.07;
    }
    else if (peso > 120 && peso <= 150) {
        return frete = 56.38;
    }
    else if (peso > 150) {
        return frete = 75.17;
    }
}

function clearValues() {
    valor.value = "";
    peso.value = "";
    result.innerHTML = "";
}


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


function upButton(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

function showHideButton() {
    if (window.scrollY === 0){
        document.querySelector('.upbutton').style.display = 'none';
    }else {
        document.querySelector('.upbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', showHideButton);


const year = document.getElementById('year');
const yearCurrent = new Date();
year.innerHTML = yearCurrent.getFullYear();


function hourNow() {
let digitalClock = new Date()    
let hour = digitalClock.getHours();
let minute = digitalClock.getMinutes();
let second = digitalClock.getSeconds();

let hours = hour < 10 ? '0'+hour : hour;
let minutes = minute < 10 ? '0'+minute : minute;
let seconds = second < 10 ? '0'+second : second;

document.getElementById('clockNow').innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(hourNow, 1000);











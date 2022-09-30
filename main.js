function calcShipping() {
    const valor = Number(document.getElementById('valor').value);
    const peso = Number(document.getElementById('peso').value);

    let despacho = Number.parseFloat("10.15")
    let pedagio = Number.parseFloat(pedag(peso))
    let frete = Number.parseFloat(classification(peso))
    let fretevalor = Number(valor * 0.23) / 100
    let gris = parseFloat(valor * 0.17) / 100
    let imposto = parseFloat(despacho + pedagio + frete + fretevalor + gris) * 13.65 / 100

    let isValid = validateCalc(valor, peso);

    if (isValid == true) {
        const result = Number(frete + despacho + pedagio + fretevalor + gris + imposto).toFixed(2);
        document.getElementById('results').innerHTML = `O valor do frete é de \u{1F449} R$ ${result}`
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
    results.innerHTML = "";
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

const input = document.getElementById("input");
const result = document.getElementById("result");
const main = document.querySelector("main");
const root = document.querySelector(":root");
const moon = document.getElementById("moon");
const light = document.getElementById("light");
const copy = document.getElementById("copyToClipboard");
moon.style.display = "none";
light.style.display = "block";

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  " ",
];

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
  }
  if (ev.key === "Enter") {
    calculate();
  }
  if (ev.key === "Backspace" || ev.key === "Delete") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Escape") {
    input.value = "";
    input.focus();
  }
});

document.getElementById("delete").addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
  if ((result.value = "ERRO")) {
    result.classList.remove("error");
    result.value = "";
  }
});

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  result.value = "ERRO";
  result.classList.add("error");
  const equal = eval(input.value);
  result.value = equal;
  result.classList.remove("error");
}

document.querySelectorAll(".charKey").forEach(function (char) {
  char.addEventListener("click", function () {
    const value = char.dataset.value;
    input.value += value;
  });
});

document.getElementById("theme").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#fff");
    root.style.setProperty("--font-color", "#000");
    root.style.setProperty("--primary-color", "#855b0e");
    moon.style.display = "block";
    light.style.display = "none";
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#333");
    root.style.setProperty("--font-color", "#fff");
    root.style.setProperty("--primary-color", "#fbab18");
    moon.style.display = "none";
    light.style.display = "block";
    main.dataset.theme = "dark";
  }
});

copy.addEventListener("click", function (ev) {
  if (copy.innerText === "Cópia") {
    copy.innerText = "Copiado";
    copy.classList.add("success");
    navigator.clipboard.writeText(result.value);
  } else {
    copy.innerText = "Cópia";
    copy.classList.remove("success");
  }
});











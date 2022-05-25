function calcularfrete() {
    const valor = parseFloat(document.getElementById('valor').value).toFixed(2);
    const peso = parseFloat(document.getElementById('peso').value);

    despacho = 10.15
    pedagio = 3.93
    frete = classification(peso)
    fretevalor = (valor * 0.23) / 100
    gris = (valor * 0.17) / 100
    imposto = (despacho + pedagio + frete + fretevalor + gris) * 13.65 /100

    let isValid = validatecalculo(valor, peso);

    if (isValid == true) {
        const result = ( frete + despacho + pedagio + fretevalor + gris + imposto).toFixed(2);
        document.getElementById('result').innerHTML = `O valor do frete é de R$ ${result}`;
    }
}

function validatecalculo(valor, peso) {
    if (!valor || !peso) {
        alert('Preencha os campos obrigatórios para efetuar o cálculo');
        return false;
    }

    return true;
}

function classification(peso) {
    if (peso <= 20){
        return frete = 25.74;
    }
    else if (peso >20 && peso <=40) {
        return frete = 32.02;
    }
    else if (peso >40 && peso <=60) {
        return frete = 33.96;
    }
    else if (peso >60 && peso <=80) {
        return frete = 39.77;
    }
    else if (peso >80 && peso <=100) {
         return frete = 42.39;
    }
    else if (peso >100 && peso <=120){
        return frete = 45.07;
    }
    else if (peso >120 && peso <= 150){
        return frete = 56.38;
    }
    else if (peso >150){
        return frete = 75.17;
    }

}


const pesoUsuario = document.getElementById('inputPeso')
const alturaUsuario = document.getElementById('inputAltura')
const exibir = document.getElementById('resultado')
const exibirNumero = document.getElementById('numerosImc')

function iniciarCalculo() {
    if (pesoUsuario.value === "" && alturaUsuario.value === "") {
        document.getElementById("erroPeso").style.color = "red";
        document.getElementById("erroAltura").style.color = "red";
    } else if (pesoUsuario.value !== "" && alturaUsuario.value === "") {
        document.getElementById("erroPeso").style.color = "rgb(121, 119, 119)";
        document.getElementById("erroAltura").style.color = "red";
    } else if (pesoUsuario.value === "" && alturaUsuario.value !== "") {
        document.getElementById("erroPeso").style.color = "red";
        document.getElementById("erroAltura").style.color = "rgb(121, 119, 119)";
    } else if (alturaUsuario === "") {
        document.getElementById("erroAltura").style.color = " rgb(121, 119, 119)";
    } else if (pesoUsuario.value === "") {
        document.getElementById("erroPeso").style.color = "rgb(121, 119, 119)";
    } else if (pesoUsuario.value !== "" && pesoUsuario.value !== "") {
        document.getElementById("erroPeso").style.color = "rgb(121, 119, 119)";
        document.getElementById("erroAltura").style.color = "rgb(121, 119, 119)";
        exibirResultado()
    }
}



function exibirResultado() {

    let imc = parseFloat(pesoUsuario.value.replace(",", ".")) / (parseFloat(alturaUsuario.value.replace(",", ".")) * parseFloat(alturaUsuario.value.replace(",", ".")))

    if (imc < 18.5) {
        exibir.innerHTML = `Estado: magreza seu resultado foi`
        exibirNumero.innerHTML = imc.toFixed(1)
    } else if (imc >= 18.5 && imc < 24.9) {
        exibir.innerHTML = `Estado: normal seu resultado foi`
        exibirNumero.innerHTML = imc.toFixed(1)
    } else if (imc >= 24.9 && imc < 29.9) {
        exibir.innerHTML = `Estado: Sobrepeso seu resultado foi`
        exibirNumero.innerHTML = imc.toFixed(1)
    } else if (imc >= 29.9 && imc < 34.9) {
        exibir.innerHTML = `Estado: Obesidade grau I seu resultado foi`
        exibirNumero.innerHTML = imc.toFixed(1)
    } else if (imc >= 34.9 && imc < 40) {
        exibir.innerHTML = `Estado: Obesidade grau II seu resultado foi`
        exibirNumero.innerHTML = imc.toFixed(1)
    } else if (imc > 40) {
        exibir.innerHTML = `Estado: Obesidade grau III seu resultado foi `
        exibirNumero.innerHTML = imc.toFixed(1)
    } else {
        exibir.innerHTML = 'voce digitou um valor invalido'
    }

}


const btnLimpar = document.getElementById('btnLimpar')
btnLimpar.addEventListener('click', function limpar() {
    inputAltura.innerHTML = alturaUsuario.value = ""
    inputPeso.innerHTML = pesoUsuario.value = ""
})




pesoUsuario.addEventListener('blur', function(){
    console.log("entrei no bluer de peso")
    inputPeso.innerHTML = pesoUsuario.value = `${pesoUsuario.value} kg`
    
})

alturaUsuario.addEventListener('blur', function(){
    console.log("entrei no bluer de altura")
    inputAltura.innerHTML = alturaUsuario.value = `${alturaUsuario.value} cm`

})










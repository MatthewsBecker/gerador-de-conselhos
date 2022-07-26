const url = "https://api.adviceslip.com/advice"

function geraConselho(){
    fetch(url)
        .then(response => {response.json()
            .then(dado => mostrarConselhos(dado) )})
}

function mostrarConselhos(dados){
    let resultado = document.querySelector("#resultado")
    let numConselho = document.querySelector("#numConselho")


    numConselho.innerHTML = `ADVICE #${dados.slip.id}`
    resultado.innerHTML = `"${dados.slip.advice}"`
}


    
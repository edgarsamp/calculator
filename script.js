var inputElement = document.querySelector(".display_content")

function calcular() {
    str = inputElement.innerHTML
    str = str.replace("^", "**")
    inputElement.innerHTML = eval(str)
}

function inserir(item) {
    if (inputElement.innerHTML.length < 29) {
        inputElement.innerHTML += item
    } else {
        alert("o numero maximo de caracters é 28")
    }
}

function remove() {
    inputElement.innerHTML = inputElement.innerHTML.slice(0, -1)
}

function limpar() {
    inputElement.innerHTML = ""
}
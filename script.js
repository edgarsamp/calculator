var inputElement = document.querySelector(".display_content")

function calculate() {
    str = inputElement.innerHTML
    str = str.replace("^", "**")
    inputElement.innerHTML = eval(str)
}

function insert(item) {
    if (inputElement.innerHTML.length < 29) {
        inputElement.innerHTML += item
    } else {
        alert("Ops!\nThe maximum number of characters is 28")
    }
}

function remove() {
    inputElement.innerHTML = inputElement.innerHTML.slice(0, -1)
}

function clean() {
    inputElement.innerHTML = ""
}
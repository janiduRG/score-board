let valuess = document.getElementById("item1")
let amounts = document.getElementById("item")
let value = 12
let amount = 5



function add1() {
    value += 1
    valuess.textContent = value
}

function add2() {
    value += 2
    valuess.textContent = value
}
function add3() {
    value += 3
    valuess.textContent = value
}

function add11() {
    amount += 1
    amounts.textContent = amount
}

function add22() {
    amount += 2
    amounts.textContent = amount
}
function add33() {
    amount += 3
    amounts.textContent = amount
}

function reset(){
    amount = 0
    value = 0
    valuess.innerText = "0"
    amounts.innerText = "0"
}

const output = document.getElementById("output")

function checkOutput() {
    if (output.innerHTML === "Bon Calcul !") {
        output.innerHTML = ""
    }
}

function addValueInOutput(value) {
    checkOutput()
    output.innerHTML += value
}

function addValue(value) {
    checkOutput()
    switch (value) {
        case 'AC':
            output.innerHTML = ""
            break;
        case 'CE':
            output.innerHTML = output.innerHTML.replace(output.innerHTML.slice(-1), "")
            break;
        case '=':
            output.innerHTML ? output.innerHTML = eval(output.innerHTML) : null;
            break;
        default:
            addValueInOutput(value)
            break;
    }
}

const btns = document.getElementsByClassName("input-number")

for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    
    btn.onclick = (e) => addValue(e.target.value)
}
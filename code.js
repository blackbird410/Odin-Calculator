// UI Design Start 
// ------------------------------------------------------------
const inputCont = document.createElement("div");
const inputField = document.createElement("input");
const rows = document.createElement("div");
const button = document.createElement("div");
const zeroButton = document.createElement("div");
const yellowButtons = document.createElement("div");
const footer = document.querySelector(".footer");
const link = document.createElement('a');
const githubLogo = document.createElement('i');

inputCont.className = "inputContainer";
inputField.className = "inputField";
inputField.readOnly = "readonly";
rows.className = "rows";
button.className = "button";
zeroButton.className = "button";
zeroButton.classList.add('zeroButton');
yellowButtons.className = 'button';
yellowButtons.classList.add('yellow');
link.className ='githubLink';
githubLogo.className = 'fa';
githubLogo.classList.add('fa-github');

link.textContent = 'Copyright © 2023 Blackbird410';
link.href = 'https://github.com/blackbird410/';
link.target = '_blank';

githubLogo.style.fontSize = "36px";

const main = document.querySelector('.main');

// ----------------------------------------------------
function generateButtons(row, container) {
    for (let i = 0; i < 4; i++) {
        if (i === 3) {
            row.appendChild(yellowButtons.cloneNode(true));
        } else {
            row.appendChild(button.cloneNode(true));
        }
    }

    for (let i =0; i < 5; i++) {
        if (i === 4) {
            const newRow = document.createElement('div');
            newRow.classList.add('rows');
            newRow.append(zeroButton);
            newRow.append(button.cloneNode(true));
            newRow.append(yellowButtons.cloneNode(true));
            container.append(newRow);
        } else {
            container.appendChild(row.cloneNode(true));
        }
    }
}

function addButtonText() {
    let texts = [
        'AC', '+/-', '%', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-', 
        '1', '2', '3', '+',
        '0', '.', '='
    ];

    let nodes = document.querySelectorAll('.button');
    let i = 0;
    nodes.forEach((node, i) => {
        node.textContent = texts[i];
        node.dataset.key = texts[i];
        i += 1;
    });

}
// ----------------------------------------------------

inputCont.appendChild(inputField);
main.appendChild(inputCont);
generateButtons(rows, main);
addButtonText();
link.appendChild(githubLogo);
footer.appendChild(link);

// -------------------------------------------------------------
// UI Design End
// -------------------------------------------------------------
function operationSelection (op) {
    switch (op) {
        case '=':
            let res = getResult();
            inputField.value = res;
            if (res.match(/(\d\.)/)) {
                tampon = res;
                numbers = [];
                operations = [];
            }
            break;
        case 'AC':
            clearAll();
            break;
        default:
            operations.push(op);
            clearInput();
            break;
    }
}

const clearInput = () => inputField.value = '';
const clearAll =  () => {
    clearInput();
    numbers = [];
    operations = [];
    tampon = "";
};

function getResult() {
    let result = numbers[0];
    for (let i = 0; i < numbers.length - 1; i++) {
        switch(operations[i]) {
            case '+':
                result += numbers[i+1];
                break;
            case '-':
                result -= numbers[i+1];
                break;
            case '*':
                result *= numbers[i+1];
                break;
            case '/':
                if (numbers[i+1] !== 0) {
                    result /= numbers[i+1];
                } else {
                    result = 'Haha :)';
                }
                break;
            case '%':
                result %= numbers[i+1];
                break;
        }
    }
    return result;
}

// -------------------------------------------------------------
let numbers = [];
let operations = [];
// 1- Make the buttons add content to the input field

let tampon = "";

window.addEventListener('click', (e) => {
    if (e.target.className.match('button')) {
        if (e.target.innerText.match(/(\d|\.)/)) {
            inputField.value += e.target.innerText;
            tampon += e.target.innerText;
        } else if (e.target.innerText === '+/-') {
            if (inputField.value.match(/-/)) {
                inputField.value = inputField.value.slice(1);
            } else {
                inputField.value = '-' + inputField.value;
            }
        } else {
            if (tampon !== "") {
                numbers.push(parseFloat(tampon));
                tampon = "";
            }
        if (e.target.innerText !== '=') {
            operationSelection(e.target.innerText);
        } else {
            if (numbers.length > 1) operationSelection(e.target.innerText);
        }

        }
    }
});

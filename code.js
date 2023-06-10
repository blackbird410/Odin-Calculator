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
rows.className = "rows";
button.className = "button";
zeroButton.className = "zeroButton";
zeroButton.classList.add('button');
yellowButtons.className = 'yellow';
yellowButtons.classList.add('button');
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
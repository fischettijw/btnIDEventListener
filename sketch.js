let btnArray, btnLabels;

function setup() {
    createCanvas(400, 400);
    background('yellow');
    btnArray = [];
    btnLabels = ['First', 'Second', 'Third', 'Fourth'];
    btnFontSize = 18;
    createButtons(btnArray, btnLabels, btnFontSize);
}

function createButtons(btns, labels, fnt) {
    for (i = 0; i < 4; i++) {
        let y = i * 30;
        btns[i] = createButton(labels[i]);
        btns[i].position(width, y);
        btns[i].style(`font-size:${fnt}pt`);
        btns[i].style(`width: ${3*fnt}px; height: ${2*fnt}px`);
        btns[i].id(i);
        document.getElementById(btns[i].id()).onclick = function() { btnClicked(btns[i].id(i)); }
    }
    debugger;
}

function btnClicked(arg) {
    console.log(arg);
}

function draw() {

}
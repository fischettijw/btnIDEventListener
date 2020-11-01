let btnArray, btnLabels;

function setup() {
    createCanvas(400, 400);
    background('yellow');
    btnArray = [];
    btnLabels = ['First', 'Second', 'Third', 'Fourth'];
    btnFontSize = 18;
    createButtons(btnArray, btnLabels, btnFontSize);
}

function createButtons() {
    let fnt = 18;
    for (i = 0; i < btnLabels.length; i++) {
        let y = i * 40;
        btnArray[i] = createButton(btnLabels[i]);
        btnArray[i].position(width, y);
        btnArray[i].style(`font-size:${fnt}pt`);
        btnArray[i].style(`width: ${10*fnt}px; height: ${2*fnt}px`);
        btnArray[i].id(i);
        document.getElementById(i).onclick = function() { btnClicked(random(i, i + 1)); }
    }

}

function btnClicked(arg) {
    console.log(arg);
}

function draw() {

}
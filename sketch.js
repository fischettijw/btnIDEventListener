let btnArray, btnLabels, btnFontSize, btnFontWidth;

function setup() {
    createCanvas(400, 400);
    background('yellow');
    btnArray = [];
    btnLabels = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    btnFontSize = 18;
    btnFontWidth = 150;
    createButtons(btnArray, btnLabels, btnFontSize, btnFontWidth);
}

function createButtons(btns, btnText, fntSz, fntWidth) {
    let spacing = 5;
    if (fntWidth == null) { fntWidth = 10 * fntSz } // fntWidth OPTIONAL
    for (i = 0; i < btnText.length; i++) {
        let y = i * ((2 * fntSz) + spacing); //i * 40;
        btns[i] = createButton(btnText[i]);
        btns[i].position(width + spacing, y + spacing);
        btns[i].style(`font-size:${fntSz}pt`);
        btns[i].style(`width: ${fntWidth}px; height: ${2*fntSz}px`);
        btns[i].id(i);
        let btnID = i; // IMPORTANT TO BE HERE WITH 'LET'
        document.getElementById(i).onclick = function() { btnClicked(btnID); }
    }
}

function btnClicked(arg) {
    console.log(arg);
}

function draw() {

}
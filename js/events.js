//  option 2 click event handler

function changeBg() {
    document.body.style.backgroundColor = 'lightgreen';
}

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3 get element by id or class then set onClick

const blueBtn = document.getElementById('btn-blue');
    // console.log(blueBtn);
    blueBtn.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'pink';}


// option 3 slight different version

const purpleBtn = document.getElementById('btn-purple');
    purpleBtn.onclick = makePurpleBtn;
    function makePurpleBtn() {
    document.body.style.backgroundColor = 'purple';
    }
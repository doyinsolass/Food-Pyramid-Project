var x = 0;
var y = 0;
var z = 0;
var a = 0;
var b = 0;
var c = 0;
document.getElementById('output-area').innerHTML = x;

document.getElementById('output-area2').innerHTML = y;

document.getElementById('output-area3').innerHTML = z;

document.getElementById('output-area4').innerHTML = a;

document.getElementById('output-area5').innerHTML = b;

document.getElementById('output-area6').innerHTML = c;

function button1x() {
    document.getElementById('output-area').innerHTML = ++x;
}

function button1y() {
    document.getElementById('output-area2').innerHTML = ++y;
}

function button1z() {
    document.getElementById('output-area3').innerHTML = ++z;
}

function button1a() {
    document.getElementById('output-area4').innerHTML = ++a;
}

function button1b() {
    document.getElementById('output-area5').innerHTML = ++b;
}

function button1c() {
    document.getElementById('output-area6').innerHTML = ++c;
}

function button2x() {
    if(x <= 0) {
        alert('Minimum value is 0!')
        return false;
    }

    document.getElementById('output-area').innerHTML = --x;
}

function  button2y() {
    if(y <= 0) {
        alert('Minimum value is 0!')
        return false;
    }

    document.getElementById('output-area2').innerHTML = --y;
}

function  button2z() {
    if(z <= 0) {
        alert('Minimum value is 0!')
        return false;
    }

    document.getElementById('output-area3').innerHTML = --z;
}

function  button2a() {
    if(a <= 0) {
        alert('Minimum value is 0!')
        return false;
    }

    document.getElementById('output-area4').innerHTML = --a;
}

function  button2b() {
    if(b <= 0) {
        alert('Minimum value is 0!')
        return false;
    }

    document.getElementById('output-area5').innerHTML = --b;
}

function  button2c() {
    if(c <= 0) {
        alert('Minimum value is 0!')
        return false;
    }

    document.getElementById('output-area6').innerHTML = --c;
}
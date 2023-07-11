function imgSlider(any) {
    document.querySelector('.first-frappe').src = any;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.header-circle');
    circle.style.background = color;
}
function changeWordColor(color) {
    const word = document.querySelector('.word');
    word.style.color = color;
}
function changeButtonColor(color) {
    const button = document.querySelector('.button-colored');
    button.style.background = color;
}

const buttons = document.querySelectorAll('button');
const counter = document.querySelector('.counter');


const updateCounter = function(ev) {

    const button = ev.target;
    const previousValue = parseInt(counter.innerText);

    if(button.classList.contains('add')) {
        counter.innerText = `${previousValue + 1}`;
    } else if(button.classList.contains('sub')) {
        counter.innerText = `${previousValue - 1}`;
    } else if(button.classList.contains('reset')) {
        counter.innerText = '0';
    }

    const currentValue = parseInt(counter.innerText);

    if(currentValue > 0) {
        counter.style.color = '#2980b9';
    } else if(currentValue < 0) {
        counter.style.color = '#e74c3c';
    } else {
        counter.style.color = 'inherit';
    }

}

buttons.forEach((button) => {
    button.addEventListener('click', updateCounter);
});

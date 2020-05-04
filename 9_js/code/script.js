let monbutton = document.querySelector('.generate');


let getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rotation = 0;
monbutton.addEventListener('click', function(event){
    console.log(event)
    // 16777215 is #ffffff
    let random = getRandom(0, 16777215);
    document.body.style.backgroundColor = `#${random.toString(16)}`;
    rotation += 20;
    monbutton.style.transform = `rotate(${rotation}deg)`;
});
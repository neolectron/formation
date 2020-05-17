fetch('http://localhost:8080/randomText')
.then((response) => response.text())
.then((text) => {
    const titleText = document.createElement('h1');
    titleText.innerText = text;
    document.body.querySelector('.app').prepend(titleText);
})
.catch((e) => {
    console.error(e);
});
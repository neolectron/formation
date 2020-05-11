const form = document.querySelector('form#composer');

const getBase64fromFile = function(file, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
}

const sendArticle = (jsonArticle) => {
    fetch('http://127.0.0.1:3000/articles', {
        method : 'POST',
        headers : {'Content-Type' : 'application/json; charset=UTF-8'},
        body : JSON.stringify(jsonArticle)
    })
    .then((response) => response.json())
    .then(console.info())
    .catch(() => console.error("impossible d'envoyer l'article :("));
}

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const { title, author, content, image } = ev.target.elements;

    getBase64fromFile(image.files[0], function(base64Image){
        const jsonArticle = {
            title  : title.value,
            author : author.value,
            content: content.value,
            image: base64Image
        };

        sendArticle(jsonArticle);
    })
});
const form = document.querySelector('form');

const printSuccess = function(){
    alert("OK");
}

const printError = function() {
    alert("OUPS");
}

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const { author, article, title } = ev.target.elements;

    fetch('http://localhost:3000/posts', {
        method : 'POST',
        body: JSON.stringify({
            title: title.value, 
            article: article.value,
            author : author.value || 'anonymous' 
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(printSuccess)
    .catch(printError);
})
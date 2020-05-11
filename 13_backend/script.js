fetch('http://localhost:3000/posts')
.then((res) => res.json())
.then((json) => {
    json.forEach(article => {
        const title = document.createElement('h2');
        title.innerText = article.title;

        const contenu = document.createElement('div');
        contenu.classList.add('.article');
        contenu.innerText = article.article;

        const author = document.createElement('div');
        author.classList.add('.author');
        author.innerText = article.author;

        document.body.appendChild(title);
        document.body.appendChild(contenu);
        document.body.appendChild(author);
    });
})
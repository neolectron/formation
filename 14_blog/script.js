const fetchArticles = function(callback) {
    fetch('http://127.0.0.1:3000/articles')
    .then((res) => res.json())
    .then(callback)
    .catch((error) => console.error(`erreur mon ami :( ${error}`));
}

const createArticle = function(jsonArticle) {
    const article = document.createElement('article');

    const articleTitle = document.createElement('h3');
    articleTitle.innerText = jsonArticle.title;

    const articleContent = document.createElement('div');
    articleContent.classList.add('article-content');
    articleContent.innerText = jsonArticle.content;

    const articleAuthor = document.createElement('address');
    articleAuthor.innerText = `~ ${jsonArticle.author}`;

    if(jsonArticle.image) {
        const image = document.createElement('img');
        image.setAttribute('src', jsonArticle.image);
        image.setAttribute('width', '400px');
        article.appendChild(image);
    }

    article.appendChild(articleTitle);
    article.appendChild(articleContent);
    article.appendChild(articleAuthor);
    return article;
}

const renderArticles = function(articles, targetElement) {
    const fragment = document.createDocumentFragment();

    articles.forEach(currentArticle => 
        fragment.prepend(createArticle(currentArticle))
    );

    targetElement.prepend(fragment);
}

fetchArticles((articles) => renderArticles(articles, document.querySelector('section')));

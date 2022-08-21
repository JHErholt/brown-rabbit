const ARTICLES_JSON = "./json/articles.json";
const FETCH_ARTICLES = fetch(ARTICLES_JSON)

// Pagination
const ARTICLE_NUMBER_PER_PAGE = 4;

FETCH_ARTICLES
.then(res => res.clone().json())
    .then(data => {
        // Print articles
        var articleContainer = document.querySelector("#article-container")
        function printArticle(page) {
            var pagination = document.querySelector("#pagination");
            pagination.className = page
            var pageNumber = Math.ceil( data["articles"].length / ARTICLE_NUMBER_PER_PAGE);
            var currentPage = page

            pagination.innerHTML = `${currentPage} of ${pageNumber}`

            var articleStart = (currentPage - 1) * pageNumber;
            var articleEnd = articleStart + pageNumber;
        
            let allArticles = document.querySelectorAll(".article")
            for (i = 0; i < allArticles.length; i++) {
                if(i == articleStart){
                    allArticles[i].classList.remove("firstArticle")
                }
                allArticles[i].classList.add("hidden");
                allArticles[i].classList.remove("activeArticles");
            }
            for (i = articleStart; i < articleEnd; i++) {
                if(i == articleStart){
                    allArticles[i].classList.add("firstArticle")
                }
                allArticles[i].classList.remove("hidden");
                allArticles[i].classList.add("activeArticles");       
            }
        }
        for (i = 0; i < data["articles"].length; i++) {
            // Create
            // Article
            var article = document.createElement("li");
            article.id = `article-${i}`;
            article.className = `${i} article`;
            var articleWrapper = document.createElement("div")
            articleWrapper.className = "article__wrapper"
            articleWrapper.setAttribute("onclick", `returnArticle("${i}")`);
            // Image container
            var articleImageContainer = document.createElement("div");
            articleImageContainer.className = "article__image-container";
            // Create image
            var articleImage = document.createElement("img");
            articleImage.src = data["articles"][i]["image"];
            articleImage.alt = "Article thumpnail";
            // Text container
            var articleTextContainer = document.createElement("div");
            articleTextContainer.className = "article__text-container"
            // Create title
            var articleTitle = document.createElement("h2");
            articleTitle.className = "article-title";
            articleTitle.innerHTML = data["articles"][i]["title"];
            // Create meta
            var articleMeta = document.createElement("p");
            articleMeta.className = "article-meta";
            articleMeta.innerHTML = "Published";
            var articleMetaTime = document.createElement("time");
            articleMetaTime.dateTime = data["articles"][i]["date"];
            articleMetaTime.innerHTML = data["articles"][i]["date"]
            // Create excerpt
            var articleText = data["articles"][i]["text"]
            var sliceArticleText = articleText.slice(0, 240);
            var articleExcerpt = document.createElement("p")
            articleExcerpt.innerHTML = `${sliceArticleText}...`
            // Create button
            var articleButton = document.createElement("button")
            articleButton.className = "button";
            articleButton.type = "button";
            articleButton.innerHTML = "Read more"
            articleButton.setAttribute("data-toggle", "modal")
            articleButton.setAttribute("data-target", "#myModal")
            articleButton.setAttribute("onclick", `returnArticle("${i}")`);
            // Append
            // Image container
            articleImageContainer.appendChild(articleImage)
            // Text container
            articleMeta.appendChild(articleMetaTime)
            articleTextContainer.appendChild(articleTitle);
            articleTextContainer.appendChild(articleMeta);
            articleTextContainer.appendChild(articleExcerpt);
            articleTextContainer.appendChild(articleButton);
            // Article
            articleWrapper.appendChild(articleImageContainer);
            articleWrapper.appendChild(articleTextContainer);
            article.appendChild(articleWrapper)
            articleContainer.appendChild(article)
        }
        printArticle(1);
    });

function updatePage(number){
    var pagination = document.querySelector("#pagination");
    var articles = document.querySelectorAll('.article');
    var pageNumber = Math.ceil( articles.length / ARTICLE_NUMBER_PER_PAGE);

    newPageNumber = (parseInt(pagination.classList[0])+number);
    if (newPageNumber == 0){
        newPageNumber = pageNumber;
    }
    if (newPageNumber == (pageNumber + 1)){
        newPageNumber = 1;
    }
    pagination.innerHTML = `${newPageNumber} of ${pageNumber}`
    pagination.className = newPageNumber
    
    var articleStart = (newPageNumber - 1) * pageNumber;
    var articleEnd = articleStart + pageNumber;

    for (i = 0; i < articles.length; i++) {
        articles[i].classList.remove("firstArticle")
        articles[i].classList.add("hidden");
        articles[i].classList.remove("activeArticles");
    }  
    for (i = articleStart; i < articleEnd; i++) {
        if(i == articleStart){
            articles[i].classList.add("firstArticle")
        }
        articles[i].classList.remove("hidden");
        articles[i].classList.add("activeArticles");
    }
}
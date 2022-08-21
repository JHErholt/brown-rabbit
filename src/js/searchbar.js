// Searchbar
var input = document.querySelector('#searchbar');
var resultContainer = document.querySelector('#searchResult');
var articles = document.querySelectorAll('.article');
// Open result container when clicking on input
// And close the result container if clicked outside the input or container
document.addEventListener('click', function(e){
    if (resultContainer.contains(e.target) || input == document.activeElement){
        resultContainer.style.display="block";
        if (document.querySelector('#searchbar').value == ''){
        }else{
            writeResults();
        }
    }else{
        if (modal.contains(e.target)){

        }else{
            resultContainer.style.display="none";
            deleteResults();
        }
    }
});
// Starts deleting and then rewrites, to prevent duplicate articles in the searchbar
function updateResult() {
    articles = document.querySelectorAll('.article');
    writeResults();
}
// Deletes all the results in the result container
function deleteResults(){
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.lastChild);
    }
}
// Writes all articles matching the criteria
function writeResults(){
    deleteResults();
    let shownArticles = 0
    for (i = 0; i < articles.length; i++) {
        if (document.querySelector('#searchbar').value == ""){
        } else{
            if (articles[i].innerHTML.toLowerCase().includes(document.querySelector('#searchbar').value.toLowerCase()) && shownArticles < 3) {
                shownArticles++;
                var result = document.createElement('div');
                result.className = "search-result";
                result.setAttribute("onclick", `returnArticle("${articles[i].classList[0]}")`);
                // Creating the layout for my search-results
                // Title
                var resultTitle = document.createElement('h3');
                console.log(articles[i].children[0])
                resultTitle.innerHTML = articles[i].children[0].children[1].children[0].innerHTML;
                result.appendChild(resultTitle);
                // Meta
                var resultMeta = document.createElement('p');
                resultMeta.innerHTML = articles[i].children[0].children[1].children[1].innerHTML;
                result.appendChild(resultMeta);
                // Excerpt
                // Get the article's excerpt
                var excerptText = articles[i].children[0].children[1].children[2].innerHTML;
                // Slice the article's excerpt to be max 120 charachters
                var slicedExcerpt = excerptText.slice(0, 120);
                // Put the sliced excerpt into the searchbar
                var resultExcerpt = document.createElement('p');
                resultExcerpt.className = "article-excerpt";
                resultExcerpt.innerHTML = slicedExcerpt + '...';
                result.appendChild(resultExcerpt);
                resultContainer.appendChild(result);
            }
        }
    }
}

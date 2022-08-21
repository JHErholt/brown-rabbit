// Get the modal
var modal = document.getElementById("myModal");
var modalBackground = document.querySelector(".modal__background");
var modalContent = document.querySelector(".modal__content")

// Get the <span> element that closes the modal
var closeModal = document.getElementsByClassName("modal__close-container")[0];

var body = document.querySelector("html")



closeModal.onclick = function () {
    body.style.overflowY = "unset"
    body.style.marginRight = "unset"
    modalContent.classList.remove("top");
    modalBackground.classList.remove("opacity-visible")
    setTimeout(() =>{
        modal.style.display = "none";
    }, 310)
}
window.onclick = function (event) {
    if (event.target == modalBackground) {
        body.style.overflowY = "unset"
        body.style.marginRight = "unset"
        modalBackground.classList.remove("opacity-visible")
        modalContent.classList.remove("top");
        setTimeout(() =>{
            modal.style.display = "none";
        }, 310)
    }
}



function returnArticle(id) {
    FETCH_ARTICLES
    .then(res => res.clone().json())
    .then(data => {
        // Get content areas
        var thumbnail = document.querySelector(".modal__thumbnail");
        thumbnail.style.backgroundImage = `url(${data["articles"][id]["image"]})`

        var title = document.querySelector(".modal__title");
        title.innerHTML = data["articles"][id]["title"];

        var date = document.querySelector(".modal__time");
        date.innerHTML = data["articles"][id]["date"];
        date.datetime = data["articles"][id]["date"];
        
        var text = document.querySelector(".modal__text");
        text.innerHTML = data["articles"][id]["text"];

        console.log(data["articles"][id])
    })

    modal.style.display = "block";
    body.style.overflowY = "hidden";
    body.style.marginRight = "17px"
    setTimeout(() =>{
        modalBackground.classList.add("opacity-visible")
    }, 100)
    setTimeout(() =>{
        modalContent.classList.add("top");
    }, 300)
    
}
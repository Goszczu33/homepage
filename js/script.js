console.log("Pozdrawiam serdecznie ! ")


let changecolor = document.querySelector(".body__changecolor");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");

changecolor.addEventListener("click", () => {
    body.classList.toggle("dark");

themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny"
});

let buttonClub = document.querySelector(".article__buttonClub");
let picture = document.querySelector(".article__picture");
let clickplayers = document.querySelector(".article__clickplayers");
let themeImage = document.querySelector(".js-themeImage");
let themePlayers = document.querySelector(".js-themePlayers");
let players = document.querySelector(".article__players");

let redyellowcards = document.querySelector(".redyellowcards");
let cards = document.querySelector(".article__cards");
let themeCards = document.querySelector(".js-themeCards");

buttonClub.addEventListener("click", () => {
    picture.classList.toggle("hidden");
    if (picture.classList.contains("hidden")) {
        themeImage.innerText = "Pokaż";
    } else {
        themeImage.innerText = "Ukryj";
    }
});


clickplayers.addEventListener("click", () => {
    players.classList.toggle("hidden");
    if (players.classList.contains("hidden")) {
        themePlayers.innerText = "Pokaż";
    } else {
        themePlayers.innerText = "Ukryj";
    }
});

cards.addEventListener("click", () => {
    redyellowcards.classList.toggle("hidden");
    if (redyellowcards.classList.contains("hidden")) {
        themeCards.innerText = "Pokaż";
    } else {
        themeCards.innerText = "Ukryj";
    }
});





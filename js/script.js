{
const welcome = () => {
console.log("Pozdrawiam serdecznie ! ")
}

const onChangeBackgroundClick = () => {
const body = document.querySelector(".body");
const themeName = document.querySelector(".js-themeName");
body.classList.toggle("dark");
themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny"
}
const changeBackgroundColor = document.querySelector(".body__changecolor");
changeBackgroundColor.addEventListener("click", onChangeBackgroundClick);
    
const toogleArmsButton = () => {
    const picture = document.querySelector(".article__picture");
    const themeImage = document.querySelector(".js-themeImage");
        picture.classList.toggle("hidden");
        if (picture.classList.contains("hidden")) {
            themeImage.innerText = "Pokaż";
        } else {
            themeImage.innerText = "Ukryj";
        }
    }
const buttonClub = document.querySelector(".article__buttonClub");
buttonClub.addEventListener("click", toogleArmsButton);


const togglePlayersButton = () => {
    const themePlayers = document.querySelector(".js-themePlayers");
    const players = document.querySelector(".article__players");
    players.classList.toggle("hidden");
    if (players.classList.contains("hidden")) {
        themePlayers.innerText = "Pokaż";
    } else {
        themePlayers.innerText = "Ukryj";
    }
}
const clickplayers = document.querySelector(".article__clickplayers");
clickplayers.addEventListener("click", togglePlayersButton);

const toggleCardsbutton = () => {
    const themeCards = document.querySelector(".js-themeCards");
    const redyellowcards = document.querySelector(".redyellowcards");
    redyellowcards.classList.toggle("hidden");
    if (redyellowcards.classList.contains("hidden")) {
        themeCards.innerText = "Pokaż";
    } else {
        themeCards.innerText = "Ukryj";
    }
}

}
let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-PLN");
let currencyElement = document.querySelector(".js-currency");
let totalElement = document.querySelector(".js-total");
let typeElement = document.querySelector(".js-type");

let EUR = 4.58;
let USD = 4.16;
let GBP = 5.21;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = plnElement.value;
    let currency = currencyElement.value;

    let total;

    switch (currency) {
        case "EUR":
        total = amount / EUR;
        typeElement.innerText = "€";
        break;
        case "USD":
            total = amount / USD;
        typeElement.innerText = "$";
        break;
        case "GBP":
            total = amount / GBP;
        typeElement.innerText = "£";
        break;
    }
    
    totalElement.innerText = total.toFixed(2);
 

});
let inCurrencyElement = document.querySelector(".js-inCurrency")
let outCurrencyElement = document.querySelector(".js-outCurrency")
let amountElement = document.querySelector(".js-amount")
let formElement = document.querySelector(".js-form")
let resultElement = document.querySelector(".js-result")

let plnToUsd = 0.2284286
let eurToUsd = 1.06855
let gbpToUsd = 1.20519
let amountToUsd
let result = 0
let rateToUsd
let usdToRate

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (inCurrencyElement.value) {
        case "USD":
            rateToUsd = 1
            break;
        case "PLN":
            rateToUsd = plnToUsd
            break;
        case "EUR":
            rateToUsd = eurToUsd
            break;
        case "GBP":
            rateToUsd = gbpToUsd

    }
    amountToUsd = amountElement.value * rateToUsd

    switch (outCurrencyElement.value) {
        case "USD":
            usdToRate = 1
            break;
        case "PLN":
            usdToRate = plnToUsd
            break;
        case "EUR":
            usdToRate = eurToUsd
            break;
        case "GBP":
            usdToRate = gbpToUsd

    }
    result = amountToUsd / usdToRate
    resultElement.innerText = `${amountElement.value} ${inCurrencyElement.value} = ${result.toFixed(2)} ${outCurrencyElement.value}`

})

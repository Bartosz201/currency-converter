{
    let inCurrencyElement = document.querySelector(".js-inCurrency")
    let outCurrencyElement = document.querySelector(".js-outCurrency")
    let amountElement = document.querySelector(".js-amount")
    let formElement = document.querySelector(".js-form")



    const plnToUsd = 0.2284286
    const eurToUsd = 1.06855
    const gbpToUsd = 1.20519

    const calculateAmoutToUsd = () => {
        let rateToUsd
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
        const amountToUsd = amountElement.value * rateToUsd

        return amountToUsd
    }

    const calculateUsdToResulte = (amountToUsd) => {
        let usdToRate
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
        const result = amountToUsd / usdToRate;
        return result
    }
    const showResult = (result) => {
        const resultElement = document.querySelector(".js-result")
        return resultElement.innerText = `${amountElement.value} ${inCurrencyElement.value} = ${result.toFixed(2)} ${outCurrencyElement.value}`

    }
    const init = () => {
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            showResult(calculateUsdToResulte(calculateAmoutToUsd()));
        })
    }
    init();
}
const amountInput = document.getElementById("amount");

const fromCurrency = document.getElementById("fromCurrency");

const toCurrency = document.getElementById("toCurrency");

const convertBtn = document.getElementById("convertBtn");

const swapBtn = document.getElementById("swapBtn");

const convertedAmount =
    document.getElementById("convertedAmount");

const resultText =
    document.getElementById("resultText");

const rateText =
    document.getElementById("rateText");

const loading =
    document.getElementById("loading");

const error =
    document.getElementById("error");

const updatedTime =
    document.getElementById("updatedTime");


// Currency symbols

const currencySymbols = {

    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    AUD: "A$",
    CAD: "C$",
    SGD: "S$",
    AED: "د.إ",
    CNY: "¥"

};


// ==============================
// CONVERT CURRENCY
// ==============================

async function convertCurrency() {

    const amount =
        parseFloat(amountInput.value);

    const from =
        fromCurrency.value;

    const to =
        toCurrency.value;


    // Validate amount

    if (
        isNaN(amount) ||
        amount <= 0
    ) {

        error.textContent =
            "Please enter a valid amount.";

        error.style.display = "block";

        return;
    }


    // Hide old error

    error.style.display = "none";

    loading.style.display = "block";


    try {

        const response = await fetch(
            `https://open.er-api.com/v6/latest/${from}`
        );


        if (!response.ok) {

            throw new Error(
                "Unable to fetch exchange rate"
            );

        }


        const data =
            await response.json();


        if (
            data.result !== "success"
        ) {

            throw new Error(
                "Exchange rate unavailable"
            );

        }


        const rate =
            data.rates[to];


        if (!rate) {

            throw new Error(
                "Currency not supported"
            );

        }


        const converted =
            amount * rate;


        // Display result

        const symbol =
            currencySymbols[to] || "";


        convertedAmount.textContent =
            `${symbol}${converted.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            )}`;


        resultText.textContent =
            `${amount} ${from} = ${converted.toFixed(
                2
            )} ${to}`;


        rateText.textContent =
            `1 ${from} = ${rate.toFixed(
                4
            )} ${to}`;


        updatedTime.textContent =
            `Last updated: ${new Date().toLocaleString()}`;


    } catch (err) {

        console.error(err);

        error.textContent =
            "Unable to get exchange rate. Please try again.";

        error.style.display = "block";

    } finally {

        loading.style.display = "none";

    }

}


// ==============================
// CONVERT BUTTON
// ==============================

convertBtn.addEventListener(
    "click",
    convertCurrency
);


// ==============================
// SWAP CURRENCIES
// ==============================

swapBtn.addEventListener(
    "click",
    () => {

        const temporary =
            fromCurrency.value;

        fromCurrency.value =
            toCurrency.value;

        toCurrency.value =
            temporary;


        convertCurrency();

    }
);


// ==============================
// ENTER KEY
// ==============================

amountInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            convertCurrency();

        }

    }
);


// ==============================
// AUTO CONVERT WHEN CURRENCY
// CHANGES
// ==============================

fromCurrency.addEventListener(
    "change",
    convertCurrency
);

toCurrency.addEventListener(
    "change",
    convertCurrency
);


// ==============================
// INITIAL CONVERSION
// ==============================

convertCurrency();
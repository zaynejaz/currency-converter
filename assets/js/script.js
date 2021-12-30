// Global Variables

const addCurrencyBtn = document.querySelector('.add-currency-btn');
const addCurrencyList = document.querySelector('.add-currency-list');
const currenciesList = document.querySelector('.currencies')

const initiallyDisplayedCurrencies = ["USD", "EUR", "GBP", "JPY", "RUB"];

let baseCurrency;
let baseCurrencyAmount;

// ======= EVENT LISTENERS =======
// +++++ open add new currency form +++++
addCurrencyBtn.addEventListener('click', addCurrencyBtnClick);

function addCurrencyBtnClick(event) {
    addCurrencyBtn.classList.toggle('open');
}

// +++++ check if currency is already in list +++++
addCurrencyList.addEventListener('click', addCurrencyListClick);

function addCurrencyListClick(event) {
    const clickedListItem = event.target.closest("li");
    if (!clickedListItem.classList.contains('disabled')) {
        const newCurrency = currencies.find(c => c.abbreviation === clickedListItem.getAttribute("data-currency"));
        if (newCurrency) newCurrenciesListItem(newCurrency);
    }
}

// +++++ remove currency from list +++++
currenciesList.addEventListener('click', currenciesListClick);

function currenciesListClick(event) {
    if (event.target.classList.contains("close")) {
        const parentNode = event.target.parentNode;
        parentNode.remove();
        addCurrencyList.querySelector(`[data-currency=${parentNode.id}]`).classList.remove('disabled');
        if (parentNode.classList.contains('base-currency')) {
            const newBaseCurrencyLI = currenciesList.querySelector('.currency');
            if (newBaseCurrencyLI) {
                setNewBaseCurrency(newBaseCurrencyLI);
                baseCurrencyAmount = Number(newBaseCurrencyLI.querySelector('.input input').value);
            }
        }
    }
}

// +++++ set new base currency +++++
function setNewBaseCurrency(newBaseCurrencyLI) {
    newBaseCurrencyLI.classList.add("base-currency");
    baseCurrency = newBaseCurrencyLI.id;
    const baseCurrencyRate = currencies.find(currency => currency.abbreviation === baseCurrency).rate;
    currenciesList.querySelectorAll(".currency").forEach(currencyLI => {
        const currencyRate = currencies.find(currency => currency.abbreviation === currencyLI.id).rate;
        const exchangeRate = currencyLI.id === baseCurrency ? 1 : (currencyRate / baseCurrencyRate).toFixed(4);
        currencyLI.querySelector(".base-currency-rate").textContent = `1 ${baseCurrency} = ${exchangeRate} ${currencyLI.id}`;
    });
}

// +++++ correct input value on input change +++++
currenciesList.addEventListener("input", currenciesListInputChange);

function currenciesListInputChange(event) {
    const isNewBaseCurrency = event.target.closest("li").id !== baseCurrency;
    if (isNewBaseCurrency) {
        currenciesList.querySelector(`#${baseCurrency}`).classList.remove("base-currency");
        setNewBaseCurrency(event.target.closest("li"));
    }
    const newBaseCurrencyAmount = isNaN(event.target.value) ? 0 : Number(event.target.value);
    if (baseCurrencyAmount !== newBaseCurrencyAmount || isNewBaseCurrency) {
        baseCurrencyAmount = newBaseCurrencyAmount;
        const baseCurrencyRate = currencies.find(currency => currency.abbreviation === baseCurrency).rate;
        currenciesList.querySelectorAll(".currency").forEach(currencyLI => {
            if (currencyLI.id !== baseCurrency) {
                const currencyRate = currencies.find(currency => currency.abbreviation === currencyLI.id).rate;
                const exchangeRate = currencyLI.id === baseCurrency ? 1 : (currencyRate / baseCurrencyRate).toFixed(4);
                currencyLI.querySelector(".input input").value = exchangeRate * baseCurrencyAmount !== 0 ? (exchangeRate * baseCurrencyAmount).toFixed(4) : "";
            }
        });
    }
}

// +++++ correct input value on blur / focus out+++++
currenciesList.addEventListener("focusout", currenciesListFocusOut);

function currenciesListFocusOut(event) {
    const inputValue = event.target.value;
    if (isNaN(inputValue) || Number(inputValue) === 0) event.target.value = "";
    else event.target.value = Number(inputValue).toFixed(4);
}

// +++++ correct input value on ENTER press +++++
currenciesList.addEventListener("keydown", currenciesListKeyDown);

function currenciesListKeyDown(event) {
    if (event.key === "Enter") event.target.blur();
}


// ======= AUXILIARY FUNCTIONS =======

// +++++ create and populate new currency list item from Country Data +++++
function populateAddCurrencyList() {
    for (let i = 0; i < currencies.length; i++) {
        addCurrencyList.insertAdjacentHTML(
            "beforeend",
            `<li data-currency=${currencies[i].abbreviation}>
                <img src=${currencies[i].flagURL} alt="${currencies[i].country}'s flag" class="flag"><span>${currencies[i].abbreviation} - ${currencies[i].name}</span>
            </li>`
        );
    }
}

// +++++ create and populate currency list abbreviation from Country Data +++++
function populateCurrenciesList() {
    for (let i = 0; i < initiallyDisplayedCurrencies.length; i++) {
        const currency = currencies.find(c => c.abbreviation === initiallyDisplayedCurrencies[i]);

        if (currency) newCurrenciesListItem(currency);
    }
}

// +++++ create and populate add to currency list item from Country Data +++++
function newCurrenciesListItem(currency) {
    if (currenciesList.childElementCount === 0) {
        baseCurrency = currency.abbreviation;
        baseCurrencyAmount = 0;
    }
    addCurrencyList.querySelector(`[data-currency=${currency.abbreviation}]`).classList.add('disabled');
    const baseCurrencyRate = currencies.find(c => c.abbreviation === baseCurrency).rate;
    const exchangeRate = currency.abbreviation === baseCurrency ? 1 : (currency.rate / baseCurrencyRate).toFixed(4);
    const inputValue = baseCurrencyAmount ? (baseCurrencyAmount * exchangeRate).toFixed(4) : "";

    currenciesList.insertAdjacentHTML(
        "beforeend",
        `<li id=${currency.abbreviation} class="currency ${currency.abbreviation === baseCurrency ? "base-currency" : ""}">
            <img src=${currency.flagURL} alt="${currency.country}'s flag" class="flag">
            <div class="info">
                <p class="input"><span class="currency-symbol">${currency.symbol}</span><input placeholder="0.0000" value=${inputValue}></p>
                <p class="currency-name">${currency.abbreviation} = ${currency.name}</p>
                <p class="base-currency-rate">1 ${baseCurrency} = ${exchangeRate} ${currency.abbreviation}</p>
            </div>
            <span class="close">&times;</span>
        </li>`
    );
}

populateAddCurrencyList();

populateCurrenciesList();
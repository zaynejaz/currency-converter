// ======= COUNTRY DATA =======
let currencies = [
    {
        country: "United States",
        name: "US Dollar",
        abbreviation: "USD",
        symbol: "\u0024",
        flagURL: 'http://www.geonames.org/flags/l/us.gif' //"assets/images/flags/us.svg"
    },
    {
        country: "European Union",
        name: "Euro",
        abbreviation: "EUR",
        symbol: "\u20AC",
        flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
    },
    {
        country: "Japan",
        name: "Japanese Yen",
        abbreviation: "JPY",
        symbol: "\u00A5",
        flagURL: "http://www.geonames.org/flags/l/jp.gif"
    },
    {
        country: "United Kingdom",
        name: "British Pound",
        abbreviation: "GBP",
        symbol: "\u00A3",
        flagURL: "http://www.geonames.org/flags/l/uk.gif"
    },
    {
        country: "Australia",
        name: "Australian Dollar",
        abbreviation: "AUD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/au.gif"
    },
    {
        country: "Canada",
        name: "Canadian Dollar",
        abbreviation: "CAD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/ca.gif"
    },
    {
        country: "",
        name: "Swiss Franc",
        abbreviation: "CHF",
        symbol: "\u0043\u0048\u0046",
        flagURL: "http://www.geonames.org/flags/l/ch.gif"
    },
    {
        country: "China",
        name: "Chinese Yuan Renminbi",
        abbreviation: "CNY",
        symbol: "\u00A5",
        flagURL: "http://www.geonames.org/flags/l/cn.gif"
    },
    {
        country: "Sweden",
        name: "Swedish Krona",
        abbreviation: "SEK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/l/se.gif"
    },
    {
        country: "New Zealand",
        name: "New Zealand Dollar",
        abbreviation: "NZD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/nz.gif"
    },
    {
        country: "Mexico",
        name: "Mexican Peso",
        abbreviation: "MXN",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/mx.gif"
    },
    {
        country: "Singapore",
        name: "Singapore Dollar",
        abbreviation: "SGD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/sg.gif"
    },
    {
        country: "Hong Kong",
        name: "Hong Kong Dollar",
        abbreviation: "HKD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/hk.gif"
    },
    {
        country: "Norway",
        name: "Norwegian Krone",
        abbreviation: "NOK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/l/no.gif"
    },
    {
        country: "South Korea",
        name: "South Korean Won",
        abbreviation: "KRW",
        symbol: "\u20A9",
        flagURL: "http://www.geonames.org/flags/l/kr.gif"
    },
    {
        country: "Turkey",
        name: "Turkish Lira",
        abbreviation: "TRY",
        symbol: "\u20BA",
        flagURL: "http://www.geonames.org/flags/l/tr.gif"
    },
    {
        country: "Russia",
        name: "Russian Ruble",
        abbreviation: "RUB",
        symbol: "\u20BD",
        flagURL: "http://www.geonames.org/flags/l/ru.gif"
    },
    {
        country: "India",
        name: "Indian Rupee",
        abbreviation: "INR",
        symbol: "\u20B9",
        flagURL: "http://www.geonames.org/flags/l/in.gif"
    },
    {
        country: "Brazil",
        name: "Brazilian Real",
        abbreviation: "BRL",
        symbol: "\u0052\u0024",
        flagURL: "http://www.geonames.org/flags/l/br.gif"
    },
    {
        country: "South Africa",
        name: "South African Rand",
        abbreviation: "ZAR",
        symbol: "\u0052",
        flagURL: "http://www.geonames.org/flags/l/za.gif"
    },
    {
        country: "Philippines",
        name: "Philippine Peso",
        abbreviation: "PHP",
        symbol: "\u20B1",
        flagURL: "http://www.geonames.org/flags/l/ph.gif"
    },
    {
        country: "Czech Republic",
        name: "Czech Koruna",
        abbreviation: "CZK",
        symbol: "\u004B\u010D",
        flagURL: "http://www.geonames.org/flags/l/cz.gif"
    },
    {
        country: "Indonesia",
        name: "Indonesian Rupiah",
        abbreviation: "IDR",
        symbol: "\u0052\u0070",
        flagURL: "http://www.geonames.org/flags/l/id.gif"
    },
    {
        country: "Malaysia",
        name: "Malaysian Ringgit",
        abbreviation: "MYR",
        symbol: "\u0052\u004D",
        flagURL: "http://www.geonames.org/flags/l/my.gif"
    },
    {
        country: "Hungary",
        name: "Hungarian Forint",
        abbreviation: "HUF",
        symbol: "\u0046\u0074",
        flagURL: "http://www.geonames.org/flags/l/hu.gif"
    },
    {
        country: "Iceland",
        name: "Icelandic Krona",
        abbreviation: "ISK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/l/is.gif"
    },
    {
        country: "Croatia",
        name: "Croatian Kuna",
        abbreviation: "HRK",
        symbol: "\u006B\u006E",
        flagURL: "http://www.geonames.org/flags/l/hr.gif"
    },
    {
        country: "Bulgaria",
        name: "Bulgarian Lev",
        abbreviation: "BGN",
        symbol: "\u043B\u0432",
        flagURL: "http://www.geonames.org/flags/l/bg.gif"
    },
    {
        country: "Romania",
        name: "Romanian Leu",
        abbreviation: "RON",
        symbol: "\u006C\u0065\u0069",
        flagURL: "http://www.geonames.org/flags/l/ro.gif"
    },
    {
        country: "Denmark",
        name: "Danish Krone",
        abbreviation: "DKK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/l/dk.gif"
    },
    {
        country: "Thailand",
        name: "Thai Baht",
        abbreviation: "THB",
        symbol: "\u0E3F",
        flagURL: "http://www.geonames.org/flags/l/th.gif"
    },
    {
        country: "Poland",
        name: "Polish Zloty",
        abbreviation: "PLN",
        symbol: "\u007A\u0142",
        flagURL: "http://www.geonames.org/flags/l/pl.gif"
    },
    {
        country: "Israel",
        name: "Israeli Shekel",
        abbreviation: "ILS",
        symbol: "\u20AA",
        flagURL: "http://www.geonames.org/flags/l/il.gif"
    }
]


// Lets generate and push the country currency data dymamically
let url = 'https://freecurrencyapi.net/api/v2';

function params(paramObj) {
    const one = "a3461cb0";
    const two = "6947";
    const three = "11ec";
    const four = "a923";
    const five = "89caf3795943";
    return new URLSearchParams({
        apikey: one + "-" + two + "-" + three + "-" + four + "-" + five,
        ...paramObj
    });
}

// Get the latest API endpoint data
function getLatest(options) {
    fetch(`${url}/latest?${params(options)}`)
        .then(res => res.json())
        .then(info => {
            // Convert and latest API UNIX date to readable date
            let unixApiDate = new Date(info.query.timestamp * 1000);
            let formattedApiDate = ('0' + unixApiDate.getDate()).slice(-2) + '-' + ('0' + (unixApiDate.getMonth() + 1)).slice(-2) + '-' + unixApiDate.getFullYear() + ' - ' + unixApiDate.toLocaleTimeString([], { hour12: false, timeZoneName: "short" });
            document.querySelector(".date").textContent = formattedApiDate;

            // Show default base_currency (USD)
            info.data["USD"] = 1;

            // Only currencies with available exchange rates are shown in currencies array
            currencies = currencies.filter(currency => info.data[currency.abbreviation]);
            currencies.forEach(currency => currency.rate = info.data[currency.abbreviation]);

            populateAddCurrencyList();
            populateCurrenciesList();
        })
        .then(err => console.log(err))
}

getLatest();
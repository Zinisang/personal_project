/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function fromFunction() {
    document.getElementById("from-currency-list").classList.toggle("show");
}

function toFunction() {
    document.getElementById("to-currency-list").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let currencyRatio = {
    USD: {
        KRW: 1184.36,
        THB: 35.38,
        unit: "달러"
    },
    KRW: {
        USD: 0.00084,
        THB: 0.32,
        unit: "원"
    },
    THB: {
        KRW: 40,
        USD: 38.123,
        unit: "바트"
    },
};

let fromCurrency = "USD";
let toCurrency = "KRW";
let fromUnit = "달러";
let toUnit = "원";

document
    .querySelectorAll("#from-currency-list a")
    .forEach(menu => menu.addEventListener("click", function () {
        document.getElementById("from-button").textContent = this.textContent;
        fromCurrency = this.textContent;
        // console.log("fromCurrency는", fromCurrency);

        document.getElementById("from-unit").textContent = this.textContent;
        fromUnit = this.textContent;
        convert()
    }));

document
    .querySelectorAll("#to-currency-list a")
    .forEach(menu => menu.addEventListener("click", function () {
        document.getElementById("to-button").textContent = this.textContent;
        toCurrency = this.textContent;
        // console.log("toCurrency는", fromCurrency);
        convert()
    }));

function convert() {
    // console.log("키업 이벤트");
    let amount = document.getElementById("from-input").value;
    // console.log("돈은"+ amount);
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
    // console.log("환전 결과 : " + convertedAmount);
    document.getElementById("to-input").value = convertedAmount
}

/--------------------------------------------------------------------/

function convertTo() {
    let amount = document.getElementById("to-input").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency]
    document.getElementById("from-input").value = convertedAmount
}


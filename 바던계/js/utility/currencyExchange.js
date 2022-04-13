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
        unit: "달러",
    },
    KRW: {
        USD: 0.00084,
        THB: 0.32,
        unit: "원",
    },
    THB: {
        KRW: 40,
        USD: 38.123,
        unit: "바트",
    },
};

let fromCurrency = "USD";
let toCurrency = "KRW";

var unitWords = ["", "만 ", "억 ", "조 ", "경 "];
var splitUnit = 10000;
let toButton = document.getElementById("to-button");
let fromButton = document.getElementById("from-button");

document.querySelectorAll("#from-currency-list a")
    .forEach(menu => menu.addEventListener("click", function () {
        document.getElementById("from-button").textContent = this.textContent;
        fromCurrency = this.textContent;

        convert("from");
    }));

document.querySelectorAll("#to-currency-list a")
    .forEach(menu => menu.addEventListener("click", function () {
        document.getElementById("to-button").textContent = this.textContent;
        toCurrency = this.textContent;

        convert("to");
    }));

function convert(type) {

    let amount = 0;
    if (type = "from") {
        amount = document.getElementById("from-input").value;
        let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
        document.getElementById("to-input").value = convertedAmount;
        renderKoreanNumber(amount, convertedAmount);
    } else {
        amount = document.getElementById("to-input").value;
        let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency]
        document.getElementById("from-input").value = convertedAmount;
        renderKoreanNumber(convertedAmount, amount);
    }
}

/--------------------------------------------------------------------/

function renderKoreanNumber(from, to) {
    document.getElementById("fromNumToKorea").textContent =
      readNum(from) + currencyRatio[fromCurrency].unit;
    document.getElementById("toNumToKorea").textContent =
      readNum(to) + currencyRatio[toCurrency].unit;
  }
  function readNum(num) {
    let resultString = "";
    let resultArray = [];
    for (let i = 0; i < unitWords.length; i++) {
      let unitResult =
        (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
      unitResult = Math.floor(unitResult);
      if (unitResult > 0) {
        resultArray[i] = unitResult;
      }
    }
    for (let i = 0; i < resultArray.length; i++) {
      if (!resultArray[i]) continue;
      resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString;
  }
  
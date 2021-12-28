/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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
    }
}

let fromCurrency = 'USD';

document
    .querySelectorAll("#from-currency-list a")
    .forEach(menu => menu.addEventListener("click", function () {
        document.getElementById("from-button").textContent = this.textContent;
        fromCurrency = this.textContent;
        console.log("fromCurrency는", fromCurrency);
    }));


var first = document.getElementsByClassName("first");
var x;
var j;

for (x = 0; x < first.length; x++){
    first[x].addEventListener("click", function () {
        for (j = 0; j < first.length; j++) {
            var img = first[j].querySelector("i");
            first[j].classList.remove("edit");
            img.classList.remove("fa-chevron-up");
            img.classList.add("fa-chevron-down");
        }
        var img = this.querySelector("i");
        this.classList.add("edit");
        if (this.classList.contains("edit")) {
            img.classList.remove("fa-chevron-down");
            img.classList.add("fa-chevron-up");
        }

        if (span.innerHTML == "Get Started") {
            product.style.transform = "scale(0)";
            pricing.style.transform = "scale(0)";
            demo.style.transform = "scale(0)";
            more.style.transform = "scale(0)";
            setTimeout(() => {
                start.style.transform = "scale(1)";
            }, 500);
        }
        
    })
}

var start = document.getElementById("start");
var product = document.getElementById("product");
var pricing = document.getElementById("pricing");
var demo = document.getElementById("demo");
var more = document.getElementById("more");

var startNav = document.getElementById("star");
var productNav = document.getElementById("prod");
var pricingNav = document.getElementById("pric");
var demoNav = document.getElementById("dem");
var moreNav = document.getElementById("mor");

startNav.addEventListener("click", function (){
    product.style.transform = "scale(0)";
    pricing.style.transform = "scale(0)";
    demo.style.transform = "scale(0)";
    more.style.transform = "scale(0)";

    setTimeout(() => {
        start.style.transform = "scale(1)";
    }, 500);
});
productNav.addEventListener("click", function () {
    start.style.transform = "scale(0)";
    pricing.style.transform = "scale(0)";
    demo.style.transform = "scale(0)";
    more.style.transform = "scale(0)";

    setTimeout(() => {
        product.style.transform = "scale(1)";
    }, 500);
});
pricingNav.addEventListener("click", function () {
    product.style.transform = "scale(0)";
    start.style.transform = "scale(0)";
    demo.style.transform = "scale(0)";
    more.style.transform = "scale(0)";

    setTimeout(() => {
        pricing.style.transform = "scale(1)";
    }, 500);
});
demoNav.addEventListener("click", function () {
    product.style.transform = "scale(0)";
    pricing.style.transform = "scale(0)";
    start.style.transform = "scale(0)";
    more.style.transform = "scale(0)";

    setTimeout(() => {
        demo.style.transform = "scale(1)";
    }, 500);
});
moreNav.addEventListener("click", function () {
    product.style.transform = "scale(0)";
    pricing.style.transform = "scale(0)";
    demo.style.transform = "scale(0)";
    start.style.transform = "scale(0)";

    setTimeout(() => {
        more.style.transform = "scale(1)";
    }, 500);
});



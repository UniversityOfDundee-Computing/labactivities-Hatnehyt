function SnacksShow() {
    document.getElementById("SnacksDiv").style.display = "block";
    document.getElementById("DishDiv").style.display = "none";
    document.getElementById("BurgerDiv").style.display = "none";
    document.getElementById("DesertDiv").style.display = "none";
    document.getElementById("IntroText").style.display = "none";
}

function BurgerShow() {
    document.getElementById("SnacksDiv").style.display = "none";
    document.getElementById("DishDiv").style.display = "block";
    document.getElementById("BurgerDiv").style.display = "none";
    document.getElementById("DesertDiv").style.display = "none";
    document.getElementById("IntroText").style.display = "none";
}

function DishesShow() {
    document.getElementById("SnacksDiv").style.display = "none";
    document.getElementById("DishDiv").style.display = "none";
    document.getElementById("BurgerDiv").style.display = "block";
    document.getElementById("DesertDiv").style.display = "none";
    document.getElementById("IntroText").style.display = "none";
}

function DesertsShow() {
    document.getElementById("SnacksDiv").style.display = "none";
    document.getElementById("DishDiv").style.display = "none";
    document.getElementById("BurgerDiv").style.display = "none";
    document.getElementById("DesertDiv").style.display = "block";
    document.getElementById("IntroText").style.display = "none";
}
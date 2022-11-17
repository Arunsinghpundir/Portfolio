


function fullName(){
    let button = document.querySelector(".btn");
    button.innerHTML = "Click Me";
    button.style.scale = "0.9";
}

function showMore(){
    let container = document.querySelector(".container");
    let card = document.querySelector(".card");
    let btn = document.querySelector("#btn1");
    let btn2 = document.querySelector("#btn2");
    container.style.backgroundImage = 'url("hwAfter.jpg")';
    btn.style.visibility = "hidden";
    btn2.style.visibility = "visible";
    container.style.overflow = "auto";
    card.style.margin = "10%";
    hidden();
}
function showLess(){
    let container = document.querySelector(".container");
    let card = document.querySelector(".card");
    container.style.backgroundImage = 'url("hw2.jpg")';
    let btn = document.querySelector("#btn1");
    let btn2 = document.querySelector("#btn2");
    btn.style.visibility = "visible";
    btn2.style.visibility = "hidden";
    visible();
}


function hidden(){
    let card = document.querySelector(".card");
    let backCard = document.querySelector(".about");
    let backCard1 = document.querySelector(".about1");
    let backCard2= document.querySelector(".about2");
    backCard.style.display = "block";
    backCard1.style.display = "block";
    backCard2.style.display = "block";
}
function visible(){
    let card = document.querySelector(".card");
    let backCard = document.querySelector(".about");
    let backCard1 = document.querySelector(".about1");
    let backCard2= document.querySelector(".about2");
    backCard.style.display = "none";
    backCard1.style.display = "none";
    backCard2.style.display = "none";
    card.style.margin = "20%";
}


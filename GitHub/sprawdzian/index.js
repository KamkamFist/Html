let tak = 0;
const div1 = document.querySelector("#div1")
function mleczko1(){
    console.log("uwu");
    if (tak == 0) {
        tak = 1;
        div1.style.backgroundColor = "red";
    }
    else if (tak == 1) {
        tak = 0;
        div1.style.backgroundColor = "green";
    }
}
let nie = 0;
const div2 = document.querySelector("#div2")
function mleczko2(){
    div2.style.width = "50px";
    div2.style.height = "50px";
}
let nie2 = 0;
const div2137 = document.querySelector("#div2")
function mleczko5(){
    div2137.style.width = "45%";
    div2137.style.height = "40vh";
}
const div3 = document.querySelector("#div3")
function mleczko3(){
    console.log("yghef")
    let ile = prompt("ilosc");
    for (  let liczba = 0; liczba < ile ; liczba++ ){
        div3.innerHTML += "jaszkiewicz jeden<br>"
        div3.style.color = "white"
    }
}
let tak3 = 0;
function mleczko4(){
    if (tak3 == 0) {
        tak3 = 1;
        div3.style.color = "#3f423f";
    }
}
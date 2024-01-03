const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
let names = document.getElementById("names");
let title = document.getElementById("title");
let score = document.getElementById("score");

let button = document.getElementById("submit");

let buttonOnclick = button.addEventListener("click", loveScore);

function loveScore(){
    if(name1.value && name2.value === " " || name1.value && name2.value === ""){
        names.innerHTML = "You have to write two names !";
    }
    else{
        title.innerHTML = "Your Love Score";
        names.innerHTML = name1.value + " & " + name2.value;
        score.innerHTML = Math.floor(Math.random() * 101) + " %"
    }

}

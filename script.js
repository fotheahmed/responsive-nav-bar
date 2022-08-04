let bugger = document.getElementById("bugger");
let menu = document.getElementById("menu");
function toggle(){
    bugger.style.display="none";
    menu.style.transform="translateX(0rem)";
}

function hamClose(){
    bugger.style.display="block";
    menu.style.transform="translateX(-50rem)";
}
const ham = document.getElementById("logo");
var x = 0;

ham.addEventListener("click", () => {
    if(x == 0) {
        x = 1;
        document.getElementById("panel").style.left = "0px";
    }
    else {
        x = 0;
        document.getElementById("panel").style.left = "-300px";
    }
});
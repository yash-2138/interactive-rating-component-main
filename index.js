document.getElementById("container2").style.display= "none"


function onClick(rating){
    document.getElementsByClassName("info")[0].innerHTML = "You selected " +rating + " out of 5";
    for(var i=1;i<=5;i++){
        document.getElementById(i).classList.remove("clickedButton")
    }
    document.getElementById(rating).classList.add("clickedButton")
}
document.getElementById("submit").addEventListener("click", () => {
    document.getElementById("container1").style.display= "none"
    document.getElementById("container2").style.display= "flex"
});
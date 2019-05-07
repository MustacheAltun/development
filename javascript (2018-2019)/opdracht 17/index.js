function bereken() {
    var aantal= document.getElementById("invoer").value
    if (aantal <100){
        document.getElementById("uitvoer").innerHTML="je krijgt geen korting"
    } else
    {
        document.getElementById("uitvoer").innerHTML="je krijgt 10% korting"
    }
}
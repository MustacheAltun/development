function bereken() {
    //invoer
    var leeftijd = document.getElementById("leeftijd").value;

    //bereken en uitvoer
    if (leeftijd <18){
        document.getElementById("uitvoer").innerHTML="<img src='cola.jpg'> je krijgt cola!"
    }
    else{
        document.getElementById("uitvoer").innerHTML="<img src='bier.jpg'> biertje?"
    }

}
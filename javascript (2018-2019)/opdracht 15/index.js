function bereken() {
    //invoer
    var leeftijd = document.getElementById("leeftijd").value

    // berekenen en uitvoer-----
    if (leeftijd<18){
        document.write("<img src='nix18.jpg'><br>");
    }
    //de zin hieronder wordt altijd afgedrukt
    document.write("einde van het programma.")


}
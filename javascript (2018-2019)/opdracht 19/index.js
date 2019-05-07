function bereken() {
    var leeftijd = document.getElementById("leeftijd").value;
    if (leeftijd < 5){
        document.getElementById("uitvoer").innerHTML="kinderopvang";
    }
    else if (leeftijd < 13){
        document.getElementById("uitvoer").innerHTML="lagere school";
    }
    else if (leeftijd < 17){
        document.getElementById("uitvoer").innerHTML="middelbaar onderwijs";
    }
    else {
        document.getElementById("uitvoer").innerHTML = "vervolgonderwijs";
    }
}
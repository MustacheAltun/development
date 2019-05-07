function blobster() {
    var leeftijd = document.getElementById("leeftijd").value;
if (leeftijd < 13){
    document.getElementById("uitvoer").innerHTML ="lagere school";
}
else if (leeftijd < 17){
    document.getElementById('uitvoer').innerHTML ="middelbare school";
}
else{
    document.getElementById("uitvoer").innerHTML="vervolgopleiding";
}
}
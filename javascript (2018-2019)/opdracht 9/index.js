function text() {
    var naam = document.getElementById('namen').value
    var leeftijd = document.getElementById('leeftijden').value

    document.getElementById('uitvoer_naam').innerHTML="je naam is: "+naam;
    document.getElementById('uitvoer_leeftijd').innerHTML="je leeftijd: "+leeftijd;
    //document.write("je naam is "+ naam +"<br>")
    //document.write("je leeftijd is "+leeftijd+"<br>")
}
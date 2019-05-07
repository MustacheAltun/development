function berekening() {
    var artikelen=document.getElementById("artikelen").value;
    var prijs=document.getElementById("prijs").value;
    var totaal=artikelen*prijs;
    var prijs_incl_btw=(totaal*0.21)+totaal;
    document.getElementById("totaalprijs").innerHTML="de totale prijs excl btw is "+ artikelen*prijs +"<br>";
    document.getElementById("aantal").innerHTML="u wilt "+artikelen+" producten aanschaffen <br>";
    document.getElementById("prijs_per_stuk").innerHTML="de prijs per product is "+prijs+"<br>";
    document.getElementById("btw_prijs").innerHTML="de btw die je betaalt is "+totaal *0.21+"<br>";
    document.getElementById("prijs_met_btw").innerHTML="prijs incl btw is "+prijs_incl_btw+"<br>";
}
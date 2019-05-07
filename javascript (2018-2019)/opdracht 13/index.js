function berekening() {
    var artikelen=document.getElementById("artikelen").value
    var prijs=document.getElementById("prijs").value
    document.getElementById("totaalprijs").innerHTML="de totale prijs is "+ artikelen*prijs +"<br>"
    document.getElementById("aantal").innerHTML="u wilt "+artikelen+" producten aanschaffen <br>"
    document.getElementById("prijs_per_stuk").innerHTML="de prijs per product is "+prijs+"<br>"

}

function bereken() {
    var BTW = document.getElementById("BTW_code").value;
    if (BTW == "medicijn"){
        document.getElementById("BTW_uitvoer_1").innerHTML="je krijgt 0% btw op dit product";
    }
    else if (BTW == "etenswaren") {
        document.getElementById("BTW_uitvoer_1").innerHTML="je krijgt 6% btw op dit product";
    }
    else {
        document.getElementById("BTW_uitvoer_1").innerHTML="je krijgt 21% btw op dit product";
    }
    var btw;
    switch (BTW) {
        case "medicijn":
            btw = 0.00;
            break;
        case "etenswaren":
            btw = 0.06
            break
        default:
            btw = 0.21
            break
    }

    var aantal = document.getElementById("artikelen_invoer").value
    document.getElementById("artikelen_uitvoer").innerHTML="u wilt "+aantal+" producten kopen";
    var prijs = document.getElementById("prijs_invoer").value
    document.getElementById("prijs_uitvoer").innerHTML="prijs per product is €"+prijs+"";
    var totaal = aantal * prijs
    document.getElementById("totaalprijs").innerHTML="u betaalt €"+totaal+" zonder btw";
    var totaal_2 = totaal * btw
    document.getElementById("totaalprijs_2").innerHTML="u betaalt €"+totaal_2+" aan btw";
    var totaal_3 = totaal_2 + totaal
    document.getElementById("totaalprijs_3").innerHTML="u betaalt €"+totaal_3+" met btw";
}

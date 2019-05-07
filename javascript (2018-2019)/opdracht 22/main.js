function bereken() {
var prijs;
var soort = document.getElementById("soort").value
switch (soort) {
    case "muur":
        prijs = 25.00;
        break;
    case "plafond":
        prijs = 40.00;
        break;
    case "vloer":
        prijs = 30.00;
        break;
}
var lengte = document.getElementById("lengte").value
var breedte = document.getElementById("breedte").value
var oppervlakte = lengte*breedte
document.getElementById("1").innerHTML="de lengte is "+lengte+"M";
document.getElementById('2').innerHTML="de breedte is "+breedte+"M";
document.getElementById("3").innerHTML="de oppervlakte is "+oppervlakte+"m2";
document.getElementById("4").innerHTML="de prijs per m2 is €"+prijs+"";
document.getElementById("5").innerHTML="de totaalprijs is €"+prijs*oppervlakte+"";

}
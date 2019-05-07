function bereken() {

    var worp = Math.floor((Math.random() * 6) + 1);
switch (worp) {

    case 1:
        document.getElementById("uitvoer").innerHTML="je gooide: een";
        break;

    case 2:
        document.getElementById("uitvoer").innerHTML="je gooide: twee";
        break;

    case 3:
        document.getElementById("uitvoer").innerHTML="je gooide: drie";
        break;

    case 4:
        document.getElementById("uitvoer").innerHTML="je gooide: vier";
        break;

    case 5:
        document.getElementById("uitvoer").innerHTML="je gooide: vijf";
        break;

    case 6:
        document.getElementById("uitvoer").innerHTML="je gooide: zes";
        break;


}
}
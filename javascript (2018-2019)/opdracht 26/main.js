function bereken() {

    var worp = Math.floor((Math.random() * 6) + 1);
    switch (worp) {

        case 1:
            document.getElementById("uitvoer").innerHTML= "<img src='1.gif'>";
            break;

        case 2:
            document.getElementById("uitvoer").innerHTML="<img src='2.gif'>";
            break;

        case 3:
            document.getElementById("uitvoer").innerHTML="<img src='3.gif'>";
            break;

        case 4:
            document.getElementById("uitvoer").innerHTML="<img src='4.gif'>";
            break;

        case 5:
            document.getElementById("uitvoer").innerHTML="<img src='5.gif'>";
            break;

        case 6:
            document.getElementById("uitvoer").innerHTML="<img src='6.gif'>";
            break;


    }
}

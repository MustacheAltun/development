function bereken() {

    var worp = Math.floor((Math.random() * 10) + 1);
    switch (worp) {

        case 1:
            document.getElementById("uitvoer").innerHTML= "<img src='1.jpg'>";
            break;

        case 2:
            document.getElementById("uitvoer").innerHTML="<img src='2.jpg'>";
            break;

        case 3:
            document.getElementById("uitvoer").innerHTML="<img src='3.jpg'>";
            break;

        case 4:
            document.getElementById("uitvoer").innerHTML="<img src='4.jpg'>";
            break;

        case 5:
            document.getElementById("uitvoer").innerHTML="<img src='5.jpg'>";
            break;

        case 6:
            document.getElementById("uitvoer").innerHTML="<img src='6.jpg'>";
            break;
        case 7:
            document.getElementById("uitvoer").innerHTML="<img src='7.jpg'>";
            break;
        case 8:
            document.getElementById("uitvoer").innerHTML="<img src='8.jpg'>";
            break;
        case 9:
            document.getElementById("uitvoer").innerHTML="<img src='9.jpg'>";
            break;
        case 10:
            document.getElementById("uitvoer").innerHTML="<img src='10.jpg'>";
            break;


    }
}
bereken()
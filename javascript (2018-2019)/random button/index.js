var clicks = 0;

function bobby() {
document.getElementById("clickcount").innerHTML = clicks;

    if (clicks === 10) {
        document.getElementById("bobster").innerHTML ="je hebt 10 keer geklikt"
        document.getElementById("bobster").style.color="green"
    }
}
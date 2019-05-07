function bereken() {
    var bob = document.getElementById("nummer_1")
    var bobbie = document.getElementById("nummer_2")
    bob.innerHTML = Math.floor((Math.random() * 10) + 1)
    bobbie.innerHTML = Math.floor((Math.random() * 10) + 1)

}

function checken() {
    var bob = document.getElementById("nummer_1").innerHTML
    var bobbie = document.getElementById("nummer_2").innerHTML
    var bobby = document.getElementById("antwoord").value
    if (bob * bobbie == bobby) {
        alert(true)
    }
    else {
        alert(false)
    }

}

var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")
var img = new Image(500, 500)
img.src = "./tower.png"
ctx.drawImage(img, 0, 0)
var kleur = ctx.fillStyle = "cyan"
ctx.fillRect(0, 500, 500, 500)

var rect = {
    x: 500,
    y: 500,

    size: {
        width: 500,
        height: 10
    }
}
var recty = rect.y;

if (recty > 0) {
    recty = recty - 10
}
else {
    recty = 0
}








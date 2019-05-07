var BTW = prompt("welke soort product wilt u kopen?","medicijn, etenswaren of andere artikelen?");
if (BTW === "medicijn"){
    document.write("je krijgt 0% btw op dit product")
}
else if (BTW !== "etenswaren") {
    document.write("je krijgt 21% btw op dit product")
}
else {
    document.write("je krijgt 6% btw op dit product")
}
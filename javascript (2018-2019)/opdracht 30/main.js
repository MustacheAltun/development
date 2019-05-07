function bereken(){
b = document.getElementById("tafel").value
for (i=1; i<=20; i++){
    document.write("<P>"+ i +" * "+ b +" = "+ i * b +"</P>")
}
}
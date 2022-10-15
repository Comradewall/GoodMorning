let time= new Date();
document.getElementById("Head-Time").innerHTML = "It is currently: " + (time.toLocaleTimeString());
document.getElementById("Head-Date").innerHTML = "The date is: " + (time.toDateString());
if (time.getHours() < 12){
    document.getElementById("Page-Title").innerHTML = "Good Morning !";
    document.getElementById("Main-Header").innerHTML = "Good Morning !";
}
else if (time.getHours() >= 12 && time.getHours() < 18){
    document.getElementById("Page-Title").innerHTML = "Good Afernoon !";
    document.getElementById("Main-Header").innerHTML = "Good Afternoon !";
}
else{
    document.getElementById("Page-Title").innerHTML = "Good Night !";
    document.getElementById("Main-Header").innerHTML = "Good Night !";
}

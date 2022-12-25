let time= new Date();

date = time.getDate() + 1;  //ha,ha zero indexed month function go brrrr

document.getElementById("Head-Time").innerHTML = "It is currently: " + (time.toLocaleTimeString());
document.getElementById("Head-Date").innerHTML = "The date is: " + (time.toDateString());
if (time.getHours() < 12){
    document.getElementById("Page-Title").innerHTML = "Good Morning !";
    document.getElementById("Main-Header").innerHTML = "Good Morning !";
}
else if (time.getHours() >= 12 && time.getHours() < 19){
    document.getElementById("Page-Title").innerHTML = "Good Afternoon !";
    document.getElementById("Main-Header").innerHTML = "Good Afternoon !";
}
else{
    document.getElementById("Page-Title").innerHTML = "Good Night !";
    document.getElementById("Main-Header").innerHTML = "Good Night !";
}

// ik not the most elegant solution but for now it will do

train_table(date);

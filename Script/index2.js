//Output

//window.alert("hej");
//document.write("hej på dig din filur");
//document.getElementById("ett").innerHTML="Goddag";
//document.getElementById("tva").innerHTML = "Hejdå";
//console.log("loggad");
//alert(document.getElementById("ett").innerHTML);
//alert(document.getElementById("tva").innerHTML);


var weight = document.getElementById("weight").innerHTML;
var height = document.getElementById("height").innerHTML;
var bmi = calculateBMI(height,weight);

//document.getElementById("question").innerHTML = "Vad är ditt BMI?";

document.getElementById("bmi").innerHTML = Math.round(bmi * 100) / 100;

function calculateBMI(height, weight) {
    return weight / (height * height);
}
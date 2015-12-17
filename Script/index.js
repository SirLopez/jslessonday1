//alert('hej');//crappy but good during development, alert vill man inte ha i onödan

//var nbr = 12; // number (var gör att det kan användas överallt i alla scope)
//nbr = "Hej"; // dynamiskt typat språk (utan var kan det endast användas inom samma scope)
//var name = "Grekland"; // string
//var myArray = ["tomten", 2.3, "elak", true]; // array
//var myObject = {name:'Daniél', age: 34} // object, följer JSON-syntax
//var noWay; // undefined - inte tilldelad ett värde ännu


//alert(typeof 3); // datatypen/literalen = number
//alert(typeof 'a'); // datatypen/literalen = string
//alert(typeof "a"); // datatypen/literalen = string
//alert(typeof [5]); // datatypen/literalen = object!!
//alert(typeof {}); // datatypen/literalen = object
//alert(typeof true); // datatypen/literalen = boolean

//var d = new Date();
//alert(new Date(d.getMilliseconds()));
//alert(d.getDay());//0-baserat med start på söndag
//alert(new Date(1990, 1, 1)); // månad är 0-baserat, men dag är 1-baserat

//var age = "34";
//var ageNumber = Number(age);
//var ageN = 34;

//var ageNextYear = "Nästa år är jag " + age + 1;
//var ageNextYearNumber = "Nästa år är jag " + (ageNumber + 1);
//var ageNextYearNumber2 = "Nästa år är jag " + (ageN + 1);

//alert(ageNextYear);
//alert(ageNextYearNumber);
//alert(ageNextYearNumber2);

//var ageString = String(ageNumber); //Konverterar till string

//var age = prompt('Hur gammal är du?');
//if (isNaN(age)) {
//    alert('inget nummer');
//} else {
//    alert('Du är ' + age + 'gammal');
//}

//var age;//tilldela värde
//if (age) {
//    alert('har ett värde');//True
//}
//else {
//    alert('har inte ett värde');//False
//};

/*

 TRUE
 * Alla strängar som inte är tomma
 * "0"
 * Alla number som inte är 0
 

 FALSE
 * ""
 * ''
 * 0
 * 0.0
 * undefined
 
 */

//var tal = prompt('Skriv in ett tal: ');
//switch (tal) {
//    case 1:
//        alert("ett");
//        break;
//    default:
//        alert("två");
//        break;
//}

//Skapa ett enkelt program som frågar efter vilken temperatur vatten har, 
//svara med IS om det är lägre eller lika med 0, 
//svara med vatten om det är mellan is och ånga, 
//svara med ånga om det är högre eller lika med 100
//använd switch, inte if/else

//var temp = prompt('Vilken temperatur har vattnet?');
//switch (true) {
//    case (temp <= 0):
//        alert("IS");
//        break;
//    case (temp >= 100):
//        alert("ÅNGA");
//        break;
//    case (temp > 0 && temp < 100):
//        alert("VATTEN");
//        break;
//}

var temp = prompt('Vilken temperatur har vattnet?');
if (isNaN(temp) || temp.trim() === "") {
    alert("SKRIV IN ETT NUMMER");
}
else {
    switch (true) {
        case (temp <= 0):
            alert("IS");
            break;
        case (temp >= 100):
            alert("ÅNGA");
            break;
        case (temp > 0 && temp < 100):
            alert("VATTEN");
            break;
        default:
            alert("Ange något annat är du vänlig");
            break;
    }
}


/*
 * != (översätter till samma datatyper och kontrollerar värdet)
 * !== kontrolerar värdet OCH datatypen direkt
 * 
 * 
 */
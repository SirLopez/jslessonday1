var array = new Array();
var array2 = new Array('Ulla', 'Bella', 'sekreterare', 'åttaåttaåttaåttaåtta');
var array3 = ['John', 'Duckett', 'Best Practice'];

array3[5]= 'Way out there';

for (var i = 0; i < array2.length; i++) {
    alert(array3[i]);//skriver undefined på de element som ännu inte angets
}
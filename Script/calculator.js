//alert(add(2,3));
//alert(add("Daniél", "Satu"));
//alert(supderAdder(5, 5, 8, 9, 9, 9, 9, 5));
//alert(supderAdder("Dani", "love", "cookies"));

alert(add(6));


function add(a, b) {

    return a + b;
}



function supderAdder() {
    var tal = 0;

    for (var i = 0; i < arguments.length; i++) {
        tal += arguments[i];
    }

    return tal;
}

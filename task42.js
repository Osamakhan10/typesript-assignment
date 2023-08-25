//42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function Great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        var greatMagician = "the Great " + magician_1;
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
function Magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician_2 = magicians_2[_i];
        console.log(magician_2);
    }
}
var magician = ["Magician 1", "Magician 2", "Magician 3"];
var greatMagicianNames = makeGreat(magicianNames);
showMagicians(greatMagicianNames);

/* Magicians:
Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/
var magicians_name = ["Merry", "Jhon", "David", "Rohit", "Albert"];
function show_magicians(magicians_name) {
    for (var i = 0; i < magicians_name.length; i++)
        console.log(magicians_name[i]);
}
show_magicians(magicians_name);

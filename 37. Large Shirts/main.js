/* Large Shirts:
Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message
*/
function make_shirt() {
    var large_shirt = "38";
    var medium_shirt = "36";
    var message = "I love typescript";
    var shirt_size = "35";
    console.log(message, large_shirt, message, medium_shirt);
    console.log("The size of your shirt is:", shirt_size);
}
make_shirt();

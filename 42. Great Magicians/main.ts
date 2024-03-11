/* Great Magicians: 
Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/

var magicians_name = ["Merry","Jhon","David","Rohit","Albert"];
function show_magicians(magicians_name: string[])
{
  for(let i=0; i<magicians_name.length; i++)
  console.log(magicians_name[i]);
}
show_magicians(magicians_name);
function make_great()
{
  for(let i=0; i<magicians_name.length; i++)
  console.log("Great",magicians_name[i]);
}
make_great();
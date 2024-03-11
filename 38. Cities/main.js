/* Cities:
Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.
*/
function describe_city() {
    var country1 = "Pakistan";
    var city3 = "New Dehli";
    function country() {
        var city1 = "Karachi";
        var city2 = "Lahore";
        console.log(city1, "is in", country1);
        console.log(city2, "is in", country1);
    }
    country();
    console.log(city3, "is not in", country1);
}
describe_city();

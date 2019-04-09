// var cityToCheck = prompt("Which is your city?");
// var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "tucson", "Great Falls", "great falls", "Honolulu", "honolulu"];
// var elements = cleanestCities.length;
// var matchFound = false;

// for (var i = 0; i < elements; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest city.");
//         break;
//     }
// }
// if (matchFound === false) {
//     alert("It's not in the list.");
// }


// var cityToCheck = prompt("Enter your city?");
// var cleanestCities = ["CHEYENNE", "SANTA FE", "TUCSON", "GREAT FALLS", "HONOLULU"];
// cityToCheck = cityToCheck.toUpperCase();
// var matchFound = false;
// var elements = cleanestCities.length;
// for (var i = 0; i < elements; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest city.");
//         break;
//     }
// }
// if (matchFound === false) {
//     alert("It's not in the list.");
// }


var cityToCheck = prompt("Which is your city?");
var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
cityToCheck = cityToCheck.toLowerCase();
var matchFound = false;
var elements = cleanestCities.length;

for (var i = 0; i < elements; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest city.");
        break;
    }
}
if (matchFound === false) {
    alert("It's not in the list.");
}
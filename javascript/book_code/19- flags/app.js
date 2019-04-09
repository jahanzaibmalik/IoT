// var matchFound = "no";
// var cityToCheck = prompt("Which is your city?");
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls" ,"Honolulu"];

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = "yes";
//         alert("It's one of the cleanest city.");
//     }    
// }
// if (matchFound === "no") {
//     alert("It's not in the list.");
// }


// var matchFound = false;
// var cityToCheck = prompt("Which is your city?");
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls" ,"Honolulu"];

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest city.");
//     }    
// }
// if (matchFound === false) {
//     alert("It's not in the list.");
// }


// var matchFound = false;
// var cityToCheck = prompt("Which is your city?");
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls" ,"Honolulu"];

// for (var i = 0; i <= 4; i++) {
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
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls" ,"Honolulu"];
var matchFound  = false;
var numElements = cleanestCities.length;

for (var i = 0; i < numElements; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest city.");
        break;
    }
}
if (matchFound === false) {
    alert("It's not in the list.");
}





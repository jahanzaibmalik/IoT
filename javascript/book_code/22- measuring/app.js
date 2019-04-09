// var cityToCheck = prompt("Which city do you live?");
// var firstChar = cityToCheck.slice(0, 1);
// alert(firstChar);


// var cityToCheck = prompt("Which is your city?");
// var someChars = cityToCheck.slice(2, 5);

// alert(someChars);


// var cityToCheck = prompt("Enter your city?");
// var someChars = cityToCheck.slice(2);
// alert(someChars);


// var cityToCheck = prompt("Which is your city?");

// var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(1);
// otherChars = otherChars.toLowerCase();
// var cappedCity = firstChar + otherChars;
// cityToCheck = cappedCity;
// var cleanestCities = ["Cheyenne", "Santa fe", "Tucson", "Great falls", "Honolulu"];
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


// var cityToCheck = prompt("Which city do you live?");
// var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var cappedCity = firstChar + otherChars;
// alert(cappedCity);


// var name = "jahanzaib malik";
// var stringChars = name.length;
// console.log(stringChars);


// var month = prompt("Enter a month.");
// var monthAbbrev;
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
//     monthAbbrev = month.slice(0, 3);
// }
// alert(monthAbbrev);


var str = prompt("Enter some text.");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === "  ") {
        alert("Double spaces found!");
        break;
    }
}


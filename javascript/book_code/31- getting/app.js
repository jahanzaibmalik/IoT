// var rightNow = new Date();
// alert(rightNow);


// var rightNow = new Date();
// var dateString = rightNow.toString();
// alert(dateString + " malik");


// var rightNow = new Date();
// var theDay = rightNow.getDay();
// alert(theDay);


var dayNames = ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
alert(nameOfToday);
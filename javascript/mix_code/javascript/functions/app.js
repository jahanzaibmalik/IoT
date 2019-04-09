// function sayHello() {   
//     document.write("Hello");
// }

// sayHello();


// function getArea(width, height) {
//     return width * height;
// }

// var wallWidth = 3;
// var wallHeight = 5;

// var getArea = getArea(wallWidth, wallHeight);
// alert(getArea);


// function calculationArea(width, height) {
//     var area = width * height;
//     return area;
// }
// var wallOne = calculationArea(3, 5);
// var wallTwo = calculationArea(8, 5);

// console.log(wallOne);
// console.log(wallTwo);


// function getSize(width, height, depth) {
//     var area = width * height;
//     var volume = width * height * depth;
//     var sizes = [area, volume];
//     return sizes;
// }

// var area = getSize(3, 2, 3)[0];
// var size = getSize(3, 2, 3)[1];

// alert(area);
// alert(size);


// var area = function(width, height) {
//     return width * height;
// }

// var nice = area(2, 5);
// alert(nice);


// var area = (function() {
//     var width = 5;
//     var height = 2;
//     return width * height;
// }());

// alert(area);


// function getArea(width, height) {
//     var area = width * height;
//     return area;
// }
// var wallSize = getArea(2, 9);
// document.write(wallSize);


function showPlotSize() {
    var width = 3;
    var height = 2;
    return "Area: " + (width * height);
}

var msg = showPlotSize();
alert(msg);
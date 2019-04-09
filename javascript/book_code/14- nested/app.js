var a = 2;
var b = 2;
var x = 2;
var y = 3;
var g = 5;
var h = 6;
var e = 7;
var f = 8;
var c = 2;
var d = 2;

// if ((x === y || a === b) && c === d) {
//     g = h;
//     alert(g);
// }
// else {
//     e = f;
//     alert(e);
// }


if (c === d) {
    if (x === y) {
        g = h;
        alert(g);
    }
    else if (a === b) {
        g = h;
        alert(g);
    }
    else {
        e = f;
        alert(e);
    }
}
else {
    e = f;
    alert(e);
}
var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was\n" +
"writing the trilogy, which contains, with the weird applicability available only to poetry and\n" +
"myth, the essential notion that the good gray wizard can understand the evil magi precisely\n" +
"because he is just enough like World War II them to grasp their minds and motives in ways that they cannot\n" +
"grasp his."

alert(text);

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
// }
// alert(text);


// for (var i = 0; i < text.length; i++) {
//     var firstChar = text.indexOf("World War II");
//     if (firstChar !== -1) {
//         tqext = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
//     }
// }
// alert(text);


// var newText = text.replace("World War II", "the Second World War");
// alert(newText);

// text = text.replace("World War II", "the Second World War");
// alert(text);

var newText = text.replace(/World War II/g, "the Second World war");
alert(newText);
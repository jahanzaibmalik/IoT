// var merchTot = parseInt(prompt("Your cost is??"));
// var orderTot;

// if (merchTot >= 100) {
//     orderTot = merchTot;
//     console.log(orderTot);
// }

// else if (merchTot < 50.01) {
//     orderTot = merchTot + 5;
//     console.log(orderTot);
// } 

// else {
//     orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//     console.log(orderTot);
// }


function calcTot(merchTot) {
    
    var orderTot;
    if (merchTot >= 100) {
        orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
        orderTot = merchTot + 5;
    }
    else {
        orderTot = merchTot + 5 + (.03 * (merchTot - 50));
    }

    return orderTot;
}


function calcShip(price) {
    return price + calcTot(price);
}


// function calc(a, b) {
//     return a + b;
// }

// var merchTot = 100;
// var orderTot = merchTot + calcTot(merchTot);
// console.log(orderTot);

var merchTot = 150;
// var tot = calc(merchTot, calcTot(merchTot));
// alert(tot);

var tot = calcShip(merchTot);
alert(tot);




// var merchTot = parseInt(prompt("Amount?"));
// var totalToCharge = calcTot(79.99);
// alert(totalToCharge);

// alert(calcTot(79.99));

// var units = (2 + (2 * 4)) + 10;
// alert(units);



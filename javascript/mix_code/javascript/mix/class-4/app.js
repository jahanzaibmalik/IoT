// var { text, checkboxes } = require('input');

// async function askStuff() {
//     const name = await text("What is your name?", { default: "fred" });

//     const colors = await checkboxes('OK ${name}, choose some colors' [
//         'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'rebeccapurple'
//     ]);

//     console.log('You chose:\n ' + colors.join('\n'));
// }

// askStuff();


// async function f() {
//     return Promise.resolve(1);
// }

// f().then(alert);


async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise;
    alert(result);
}

f();

// 1a) Write a function that displays a message after 5s.


function displayMessageAfter5s() {

    setTimeout(function () {
        console.log("Displaying message after 5s")
    }, 5000);

    console.log("Hellow.............. Normal console");
}


// displayMessageAfter5s()

function delayedGreeting(name, delayTime) {

    setTimeout(function () {
        console.log("Hello", name);
    }, delayTime);
}


delayedGreeting('Faiza', 2000);
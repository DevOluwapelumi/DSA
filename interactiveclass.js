// const check = (name) => {
//     return name.toLowerCase()

// }
// console.log(check('Oyin'));

// let allFoods = [

// ]

function arrangeNoodles(x, y) {
    let cartonNumber = 1;
    let noodleNumber = 1;

    for (let i = 1; i <= x; i++) {
        console.log("Carton " + cartonNumber + " - noodle " + noodleNumber);
        noodleNumber++;

        if (noodleNumber > y) {
            noodleNumber = 1;
            cartonNumber++;
        }
    }
}

arrangeNoodles(3, 2);

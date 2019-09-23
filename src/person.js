
const isAdult = (age) => age >= 18;

const canDrink = (age) => {
    if(age > 21) {
        console.log('you can drink')
    }
}

const isSenior = (age) => age > 64;

export {isAdult, canDrink, isSenior as default};

//default export can use 0 or 1 time.
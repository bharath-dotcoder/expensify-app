

const isAdult = (age) => {
    return age > 18;
}

const canDrink = (age) => {
    return age > 20;
}

const isSenior = (age) => age >=65;

export {isAdult, canDrink, isSenior as default};
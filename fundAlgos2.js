//Let's say shirts cost $20 (including tax), but friendly Josh will give a 9%
//discount if you buy two, or a nice 19% discount if you buy three, or a sweet
//35% discount if you buy four or more. He only accepts cash and doesn't have
//coins, so you have to round up to the nearest dollar. Build a function
//shirtPricing(num) that, given how many sweatshirts you want, returns the cost.


const shirtPricing = num => {
    let shirtCost = 20;

    switch (true) {
        case (num === 2):
            shirtCost -= shirtCost * .09;
            shirtCost = Math.ceil(shirtCost * num);
            return shirtCost;
        case (num === 3):
            shirtCost -= shirtCost * .19;
            shirtCost = Math.ceil(shirtCost * num);
            return shirtCost;
        case (num > 3):
            shirtCost -= shirtCost * .35;
            shirtCost = Math.ceil(shirtCost * num);
            return shirtCost;
        default:
            return shirtCost;
    }
}
console.log(shirtPricing(2));
console.log(shirtPricing(3));
console.log(shirtPricing(5));
console.log(shirtPricing(1));

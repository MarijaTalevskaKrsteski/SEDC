let withdraw = prompt("How much money would you like to withdraw?");
let cash = parseInt(withdraw);
let account = 300;

function atm(cash) {
    if (isNaN(cash)) {
        console.log("Invalid input.");
        return false;
    }
    if (cash <= account) {
        let newAmmount = account - cash;
        return  newAmmount;
    } else {
        console.log("Not enough money.");
        return false;
    }
}

let f = atm(cash);

if (f !== false)
    console.log(`Old ammount: $${account}. Withdrawn ammount: $${cash}. New ammount: $${f}.`);
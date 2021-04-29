"use strict";

/* === DECLARATION === */
console.log('\n' + '%cCLASS: %cDeclaration', 'color: blue', 'color: green' , '\n');

class Account {

    // contructor
    constructor(account_number, owner, payIn) {
        this._account_number = account_number;
        // set parameter in an array
        this._owner = [owner]; 
        this._balance = payIn;
        this._aktiv = true;
    }

    // method
    call_owner() {
        console.log("Owner: ", this._owner);
    }

    // setter
    set pay_in(payIn) {
        this._balance += payIn;
    }
    set pay_out(payOut) {
        this._balance -= payOut;
    }

    // getter
    get account_balance() {
        return this._balance;
    }

}

console.log(Account);


/* End */
// Terminal$> .../npm run test
// quit npm Strg^C
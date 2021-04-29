"use strict";

/* === EXTEND === */
console.log('\n' + '%cCLASS: %cExtend', 'color: blue', 'color: green' , '\n');

class SubAccount extends Account {

    constructor(account_number, owner, payIn, limit) {
        super(account_number, owner, payIn);
        this._limit = limit;
    }

    _balance_check(payOut) {
        return this._balance - payOut < this._limit ? false : true;
    }
    
    set pay_out(payOut) {
        return this._balance_check(payOut) ? super.pay_out(payOut) : console.log("Payout not possible");
    }

}

console.log(SubAccount);


/* End */
// Terminal$> .../npm run test
// quit npm Strg^C
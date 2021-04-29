"use strict";

/* === INITIALIZE === */
console.log('\n' + '%cCLASS: %cInitialize', 'color: blue', 'color: green' , '\n');

// /*
// Accout class
let account = new Account("0123466789", "Max Mueller", 1000);
console.log(account);

// SubAccount class extends from Account class
let subAccount = new Account("9876543210", "Lisa Mueller", 500, -50);
console.log(subAccount);




/* === METHOD === */
console.log('\n' + '%cCLASS: %cMethod', 'color: blue', 'color: green' , '\n');

// /*
account.call_owner();
subAccount.call_owner();




/* === Getter & Setter === */
console.log('\n' + '%cCLASS: %cGetter & Setter', 'color: blue', 'color: green' , '\n');

// /*
// Account
account.pay_in = 1000;
account.pay_out = 3600;
console.log("Balance Account: ", account.account_balance);

// SubAccount
subAccount.pay_out = 600;
console.log("Balance SubAccount: ", subAccount.account_balance);



/* End */
// Terminal$> .../npm run test
// quit npm Strg^C
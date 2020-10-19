// setup server
var express = require('express');
var app     = express();
const cors = require('cors');
app.use(cors());


// setup directory used to serve static files
app.use(express.static('public'));

// setup data store
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('public/db.json');
var db      = low(adapter);

// required data store structure
db.defaults({ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}).write();

/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/

app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    // Create account route
    // return success or failure string
    res.set('Access-Control-Allow-Origin', "*");

    var new_account = {
        "name"    : req.params.name,
        "email"    : req.params.email,
        "balance": 0,
        "password"    : req.params.password,
        "transactions": [{action: "Create account", Balance: 0, timestamp: Date(Date.now())}]
    };

    var check_email_exists = db.get('accounts')
                        .find({email: new_account.email})
                        .value();

    // console.log("Check Email Exists", check_email_exists);

    if (check_email_exists) {
        console.log("Account creation failed. Email address is in use for another account");
        res.send("Account creation failed. Email address is in use for another account");
    }
    else {
        db.get('accounts').push(new_account).write();
        console.log("Account Created");
        res.send("Account Created!");
    }
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null

    res.set('Access-Control-Allow-Origin', "*");

    var login = {
        "email"    : req.params.email,
        "password"    : req.params.password
    };

    // Check if login is good
    var target_account = db.get('accounts')
                        .find({email: login.email})
                        .value();

    // console.log(target_account);
    var correct_pw = [];
 
    if (target_account) {
        correct_pw = target_account.password;        
    }
    else {
        correct_pw = '';
    }
    
    if (login.password == correct_pw) {
        console.log("Access Granted");
        
        // Update transaction
        var new_transaction = {action: "Login successful", balance: target_account.balance,timestamp: Date(Date.now())};

        db.get('accounts')
            .find({email: login.email})
            .get('transactions')
            .push(new_transaction)
            .write();

        console.log(db.get('accounts').find({email: login.email}).value());
        res.send(db.get('accounts').find({email: login.email}).value());
    }
    else {
        console.log("Wrong password, loser!!!!! (...or the account doesn't exist)");
        res.send("Wrong password, loser!!!!1");
    }

});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
    res.set('Access-Control-Allow-Origin', "*");

    var balance_input = {
        "email"    : req.params.email,
    };

    var target_account = db.get('accounts')
                        .find({email: balance_input.email})
                        .value();
                    
    if (!target_account) {
        console.log("No account found matching email address. Maybe learn to type better or make an account?");
        res.send("No account found matching email address. Maybe learn to type better or make an account?");
    }
    else {

        // Update transaction
        var new_transaction = {action: "Check Balance", balance: target_account.balance,timestamp: Date(Date.now())};

        db.get('accounts')
            .find({email: balance_input.email})
            .get('transactions')
            .push(new_transaction)
            .write();

        console.log(`Your balance is $${target_account.balance}`);
        res.send(`Your balance is $${target_account.balance}`);
    }

});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
    res.set('Access-Control-Allow-Origin', "*");

    var deposit = {
        "email"    : req.params.email,
        "amount"    : req.params.amount
    };

    var target_account = db.get('accounts')
                        .find({email: deposit.email})
                        .value();



    if (!target_account) {
        console.log("No account found matching email address. Maybe learn to type better or make an account?");
        res.send("No account found matching email address. Maybe learn to type better or make an account?");
    }
    else {
        
        var new_balance = parseFloat(target_account.balance) + parseFloat(deposit.amount);

        // console.log(new_balance);
        db.get('accounts')
            .find({email: deposit.email})
            .assign({balance: new_balance})
            .write();


        // Update transaction
        var new_transaction = {action: "Deposit", balance: new_balance,timestamp: Date(Date.now())};

        db.get('accounts')
            .find({email: deposit.email})
            .get('transactions')
            .push(new_transaction)
            .write();

        console.log(`Surprisingly, your deposit worked! You have $${new_balance} `);
        console.log(new_transaction);
        res.send(`Surprisingly, your deposit worked! You have $${new_balance}.`);
    }

});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
    res.set('Access-Control-Allow-Origin', "*");


    var withdraw = {
        "email"    : req.params.email,
        "amount"    : req.params.amount
    };

    var target_account = db.get('accounts')
                        .find({email: withdraw.email})
                        .value();

    if (!target_account) {
        console.log("No account found matching email address. Maybe learn to type better or make an account?");
        res.send("No account found matching email address. Maybe learn to type better or make an account?");
    }
    else {
        
        var new_balance = parseFloat(target_account.balance) - parseFloat(withdraw.amount);

        // console.log(new_balance);
        db.get('accounts')
            .find({email: withdraw.email})
            .assign({balance: new_balance})
            .write();


        // Update transaction
        var new_transaction = {action: "Withdraw", balance: new_balance,timestamp: Date(Date.now())};

        db.get('accounts')
            .find({email: withdraw.email})
            .get('transactions')
            .push(new_transaction)
            .write();

            console.log(`Take your money! You have $${new_balance} `);
            console.log(new_transaction);
            res.send(`Take your money! You have $${new_balance}.`);
    }

});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
    res.set('Access-Control-Allow-Origin', "*");

    var transactions = {
        "email"    : req.params.email,
    };

    var target_account = db.get('accounts')
                        .find({email: transactions.email})
                        .value();
                    
    if (!target_account) {
        console.log("No account found matching email address. Maybe learn to type better or make an account?");
        res.send("No account found matching email address. Maybe learn to type better or make an account?");
    }
    else {

        // Update transaction
        var new_transaction = {action: "Check Transactions", balance: target_account.balance,timestamp: Date(Date.now())};

        db.get('accounts')
            .find({email: transactions.email})
            .get('transactions')
            .push(new_transaction)
            .write();

        console.log("Here are your transactions");
        console.log(db.get('accounts').find({email: transactions.email}).value().transactions);
        res.send(db.get('accounts').find({email: transactions.email}).value().transactions);
    }


});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
    res.set('Access-Control-Allow-Origin', "*");

    console.log("Here is all of the data. Smh.");
    res.send(db.get('accounts').value());


});


// start server
// -----------------------
app.listen(3001, function(){
    console.log('Running at port 3001');
});


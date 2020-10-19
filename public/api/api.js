
function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------    
    console.log('Attempting to create account....');
    var name = document.getElementById('createAccount_name').value;
    var email = document.getElementById('createAccount_email').value;
    var pw = document.getElementById('createAccount_password').value;
    var status = document.getElementById('status');
    // var url = 'http://localhost:3000/account/create/' + name + '/' + email + '/' + pw;
    var url = 'http://134.209.160.201:3001/account/create/' + name + '/' + email + '/' + pw;


    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res.text);
            status.innerHTML = res.text;
        }
    });
}

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------

    console.log('Attempting to login....');
    var email = document.getElementById('login_email').value;
    var pw = document.getElementById('login_password').value;
    // var url = 'http://localhost:3000/account/login/' + email + '/' + pw;
    var url = 'http://134.209.160.201:3001/account/create/' + email + '/' + pw;

    var data = document.getElementById('data');
    var status =  document.getElementById('status');


    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res.body);
            if (res.body){
                data.innerHTML = JSON.stringify(res.body, undefined,2);
                status.innerHTML = ``;

            }
            else{
                status.innerHTML = res.text;
                data.innerHTML = ``;

            }
        }
    });

}

function deposit() {
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------
    console.log('Attempting to deposit...');

    var email = document.getElementById('deposit_email').value;
    var amount = document.getElementById('deposit_amount').value;
    // var url = 'http://localhost:3000/account/deposit/' + email + '/' + amount;
    var url = 'http://134.209.160.201:3001/account/create/' + email + '/' + amount;
    var status =  document.getElementById('status');

    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res.text);
            if (res.text){
                status.innerHTML = res.text;
            }
        }
    });


}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
    console.log('Attempting to withdraw...');

    var email = document.getElementById('withdraw_email').value;
    var amount = document.getElementById('withdraw_amount').value;
    // var url = 'http://localhost:3000/account/withdraw/' + email + '/' + amount;
    var url = 'http://134.209.160.201:3001/account/create/' + email + '/' + amount;

    var status =  document.getElementById('status');


    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res.body);
            if (res.text){
                status.innerHTML = res.text;
            }
        }
    });


}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
    console.log('Attempting to get transactions...');

    var email = document.getElementById('transactions_email').value;
    // var url = 'http://localhost:3000/account/transactions/' + email;
    var url = 'http://134.209.160.201:3001/account/create/' + email ;

    var data = document.getElementById('data');
    var status = document.getElementById('status');


    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res.text);
            if (res.body){
                data.innerHTML = JSON.stringify(res.body,undefined,2);
                status.innerHTML = ``;

            }
            else {
                status.innerHTML = res.text;
                data.innerHTML = ``;
            }
        }});
}


function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
    console.log('Attempting to get balance...');

    var email = document.getElementById('balance_email').value;
    // var url = 'http://localhost:3000/account/get/' + email;
    var url = 'http://134.209.160.201:3001/account/create/' + email;

    var data = document.getElementById('data');
    var status = document.getElementById('status');


    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res.text);
            if (res.body){
                data.innerHTML = JSON.stringify(res.body,undefined,2);
                status.innerHTML = ``;

            }
            else {
                status.innerHTML = res.text;
                data.innerHTML = ``;
            }
        }});
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
    // var url = 'http://localhost:3000/account/all';
    var url = 'http://134.209.160.201:3001/account/all';

    var data = document.getElementById('data');
    var status = document.getElementById('status');


    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res.text);
            if (res.body){
                data.innerHTML = JSON.stringify(res.body,undefined,2);
                status.innerHTML = ``;

            }
            else {
                status.innerHTML = res.text;
                data.innerHTML = ``;
            }
        }});
}




var ui = {};

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">Kenny's Sassy Bank</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#"  onclick=defaultModule()>Home</a>
        <a class="nav-item nav-link active" href="#" onclick=loadCreateAccount()>Create Account </a>
        <a class="nav-item nav-link active" href="#" onclick=loadLogin()>Login</a>
        <a class="nav-item nav-link active" href="#" onclick=loadDeposit()>Deposit</a>
        <a class="nav-item nav-link active" href="#" onclick=loadWithdraw()>Withdraw</a>
        <a class="nav-item nav-link active" href="#" onclick=loadTransactions()>Transactions</a>
        <a class="nav-item nav-link active" href="#" onclick=loadBalance()>Balance</a>
        <a class="nav-item nav-link active" href="#" onclick=loadAllData()>All Data</a>
      </div>
    </div>
  </nav>
 
`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
    <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">Welcome to the sassy bank.</div>
        <div class="card-body">
        <h5 class="card-title">We're not stoked that you're here...</h5>
        <p class="card-text">Use the navigation bar to get to them. Is this your first time using the internet?</p>
        <img class="card-img-top" src="bank.png" alt="Bank Logo">
    </div>
</div>
`;

ui.createAccount = `
    <!-- ------------- YOUR CODE: Create Account UI ------------- --> 
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
            <div class="card-body">
            <h5 class="card-title">We need your info. We'll keep it private. Kinda.</h5>

            <div class="form-group">
                <label for="inputName">Name</label>
                <input type="name" class="form-control" id="createAccount_name" placeholder="Your Name">
            </div>

            <div class="form-group">
                <label for="inputEmail">Email Address</label>
                <input type="email" class="form-control" id="createAccount_email" placeholder="example@hotmail.com">
            </div>

            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="createAccount_password" placeholder="100-150 characters">
            </div>

            <button type="submit" class="btn btn-light" onclick=create()>Create!</button>
            <br></br>
            <div id="status"></div>
        </div>
    </div>
`;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- --> 
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Login</div>
            <div class="card-body">
            <h5 class="card-title">(You don't actually need to do this to use any of the features. Oops.)</h5>

            <div class="form-group">
                <label for="inputEmail">Email Address</label>
                <input type="email" class="form-control" id="login_email" placeholder="example@hotmail.com">
            </div>

            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="login_password" placeholder="100-150 characters">
            </div>

            <button type="submit" class="btn btn-light" onclick=login()>Login!</button>      
            <br></br>
            <div id="status"></div>     
        </div>
    </div>
    <pre id="data"> </pre>

`;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- --> 
    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-header">Deposit</div>
            <div class="card-body">
            <h5 class="card-title">Give us your money.</h5>

            <div class="form-group">
                <label for="inputEmail">Email Address</label>
                <input type="email" class="form-control" id="deposit_email" placeholder="example@hotmail.com">
            </div>

            <div class="form-group">
                <label for="inputAmount">Deposit Amount</label>
                <input type="number" class="form-control" id="deposit_amount" placeholder="$1000000 (you wish!)">
            </div>

            <button type="submit" class="btn btn-light" onclick=deposit()>Let's go!</button>
            <br></br>
            <div id="status"></div>
            
        </div>
    </div>
`;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- --> 
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">Withdraw</div>
            <div class="card-body">
            <h5 class="card-title">Take your money.</h5>

            <div class="form-group">
                <label for="inputEmail">Email Address</label>
                <input type="email" class="form-control" id="withdraw_email" placeholder="example@hotmail.com">
            </div>

            <div class="form-group">
                <label for="inputAmount">Withdrawal Amount</label>
                <input type="number" class="form-control" id="withdraw_amount" placeholder="Need $$ for videogames">
            </div>

            <button type="submit" class="btn btn-light" onclick=withdraw()>Let's go!</button>
            <br></br>
            <div id="status"></div>
        </div>
    </div>
`;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
    <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">Transactions</div>
            <div class="card-body">
            <h5 class="card-title">Reminisce on all the fun times you had on our website</h5>

            <div class="form-group">
                <label for="inputEmail">Email Address</label>
                <input type="email" class="form-control" id="transactions_email" placeholder="example@hotmail.com">
            </div>

            <button type="submit" class="btn btn-dark" onclick=transactions()>Let's go!</button>
            <br></br>
            <div id="status"></div>            
        </div>
    </div>

    <pre id="data"> </pre>
`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">Check Balance</div>
            <div class="card-body">
            <h5 class="card-title">Warning: The answer may make you sad.</h5>

            <div class="form-group">
                <label for="inputEmail">Email Address</label>
                <input type="email" class="form-control" id="balance_email" placeholder="example@hotmail.com">
            </div>

            <button type="submit" class="btn btn-dark" onclick=balance()>Let's go!</button>
            <br></br>
            <div id="status"></div>            
        </div>
    </div>
    <pre id="data"> </pre>
`;


ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">Get All Data</div>
            <div class="card-body">
            <h5 class="card-title">Please use this to hack us!!! We're literally asking for it.</h5>

            <button type="submit" class="btn btn-danger" onclick=allData()>Press this. Seriously.</button>
            <div id="status"></div>            
        </div>
    </div>
    <pre id="data"> </pre>
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();

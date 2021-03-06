const header = document.querySelector("header");
const content = document.getElementById("content");

let userObjects = JSON.parse(localStorage.getItem("users")||`[
    {
        "username":"janne",
        "password":"test"
    },
    {
        "username":"durre",
        "password":"durre"
    },
    {
        "username":"jaja",
        "password":"jaja"
    }
]`);
beginningOfPage();
function beginningOfPage(){
    header.insertAdjacentHTML("afterbegin", "<h1>Welcome! Log-In System! Click Here!</h1>");

    let register = document.createElement("button");
    header.appendChild(register);
    register.innerText = "Register!"


    register.addEventListener("click", function(){
        console.log("klack");
        newUser();

    });

    let h1 = document.querySelector("h1");
    h1.addEventListener("click", function() {
    header.innerHTML = "<h1> Welcome! Log-In System! Click Here! </h1>";

    startPage();
});

};
function newUser() {
    header.innerHTML ="<h1> Welcome! Log-In System! Register yourself!</h1>";
    let addUser = document.createElement("button");
    addUser.id = "addUser";
    addUser.innerText ="Add user";
    let registerForm = `<input type="text" id="registerUsername">
                        <input type="password" id="registerPassword">` 

    addUser.addEventListener("click", function(){
        let registerUsername = document.getElementById("registerUsername").value;
        let registerPassword = document.getElementById("registerPassword").value;
    
        userObjects.push(registerUsername + registerPassword);
        localStorage.setItem("isLoggedIn", registerUsername + registerPassword);
        localStorage.setItem("users", JSON.stringify(userObjects));
        
    });
    content.innerHTML= ("<p> Please register!</p>" + registerForm);
    content.insertAdjacentElement("beforeend", addUser);
    startPage();
};

function startPage() {
    let logInBtn = document.createElement("button");
    logInBtn.id = "logInBtn";
    console.log(logInBtn.innerText);
    logInBtn.innerText = "Log In!"
    let loginForm = `<input type="text" id="username">
                    <input type="password" id="password">`
    console.log(logInBtn);

    logInBtn.addEventListener("click", function(){
        console.log("click");
        let usernameInput = document.getElementById("username").value;
        let passwordInput = document.getElementById("password").value;
        
        let findUser = userObjects.find((a) => a.username === usernameInput && a.password === passwordInput);
        console.log(findUser);   
        if (findUser) { 
            localStorage.setItem("isLoggedIn", usernameInput);
        loggedInScreen(usernameInput);  

        } else{
            content.insertAdjacentHTML("beforeend", "<p>" + usernameInput + " not found in the system!</p>")
        }     
        
    });
    content.insertAdjacentHTML("beforeend","<p> Please Log-In!</p>" + loginForm);
    content.insertAdjacentElement("beforeend", logInBtn);

};


function loggedInScreen(username) {
    header.innerHTML="";
    header.insertAdjacentHTML("beforeend", "<h1> Welcome! Log-In System! You have logged in " +username+ "</h1>")
    content.innerHTML = ("<p> " + username + " you are logged in!</p>")
    renderLogOut();
};
function renderLogOut(){ 
    let logOutBtn = document.createElement("button");
    logOutBtn.id = "logOutBtn";
    console.log(logOutBtn.innerText);
    logOutBtn.innerText = "Log Out!"
     
    logOutBtn.addEventListener("click", function(){
    startPage();
    content.innerHTML ="";
    header.innerHTML="";
    beginningOfPage();
    localStorage.removeItem("isLoggedIn");
    });
    content.insertAdjacentElement("beforeend", logOutBtn);
};
const user = localStorage.getItem("isLoggedIn");
    
if (user) {
    loggedInScreen(user);
};
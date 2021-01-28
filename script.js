const header = document.querySelector("header");
const content = document.getElementById("content");
const logInBtn = document.getElementById("logInBtn");

let userObjects = [
    {
        username:"janne",
        password:"test"
    },
    {
        username:"durre",
        password:"durre"
    },
    {
        username:"jaja",
        password:"jaja"
    }
];

header.insertAdjacentHTML("afterbegin", "<h1>Welcome! Log-In System! Click Here!</h1>");

header.addEventListener("click", function() {
   content.innerHTML = "";

    startPage();
});

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
    content.insertAdjacentHTML("beforebegin", "<p> " + username + " you are logged in!</p>")
    renderLogOut();
};
function renderLogOut(){
    content.innerHTML ="";
    let logOutBtn = document.createElement("button");
    logOutBtn.id = "logOutBtn";
    console.log(logOutBtn.innerText);
    logOutBtn.innerText = "Log Out!"
     
    logOutBtn.addEventListener("click", function(){
    startPage();
    content.innerHTML ="";
    localStorage.removeItem("isLoggedIn");
    });
     
         content.insertAdjacentElement("beforeend", logOutBtn);
         
};
const user = localStorage.getItem("isLoggedIn");
    
if (user) {
    loggedInScreen(user);
};


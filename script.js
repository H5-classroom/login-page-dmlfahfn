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
        username:"durre",
        password:"durre"
    }
];

// localStorage.setItem("userObjects", JSON.stringify(userObjects));

// console.log(userObjects);

header.insertAdjacentHTML("afterbegin", "<h1>Welcome! Log-In System! Click Here!</h1>");

header.addEventListener("click", function() {
    content.innerHTML = "";

    startPage();
});

function startPage() {
    let logInBtn = document.createElement("button");
    logInBtn.id = "logInBtn";
    console.log(logInBtn.innerText);
    logInBtn.innerText = "CLICK HERE!"
    let loginForm = `<input type="text" id="username">
        <input type="password" id="password">`
    console.log(logInBtn);

    logInBtn.addEventListener("click", function(){
        console.log("click");
        let usernameInput = document.getElementById("username").value;
        let passwordInput = document.getElementById("password").value;
        for (user in userObjects){
            if (usernameInput == userObjects[user].username && passwordInput == userObjects[user].password) {
                content.insertAdjacentHTML("beforeend", "<p> " + usernameInput + " you are logged in!</p>")
                console.log(username + " you are logged in!");
                break;
            } else {
                content.insertAdjacentHTML("beforeend", "<p>" + usernameInput + " not found in the system!</p>")
                break;
            }
        }
    });
    content.insertAdjacentHTML("beforeend","<p> Please Log-In!</p>" + loginForm);
    content.insertAdjacentElement("beforeend", logInBtn);
    logOut();
};

function logOut(){
    let logOutBtn = document.createElement("button");
    logOutBtn.id = "logOutBtn";
    console.log(logOutBtn.innerText);
    logOutBtn.innerText = "CLICK HERE!"

    logOutBtn.addEventListener("click", function(){
        
    });
}
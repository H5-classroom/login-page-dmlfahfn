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
    }
];

header.insertAdjacentHTML("afterbegin", "<h1>Welcome! Log-In System! Click Here!</h1>");

header.addEventListener("click", function() {
    content.innerHTML = "";

    startPage();
});

function startPage() {
    content.insertAdjacentHTML("beforeend","<p> Please Log-In!</p>");
};

logInBtn.addEventListener("click", function(){
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    for (user in userObjects){
        if (usernameInput == userObjects[user].username && passwordInput == userObjects[user].password) {
            content.insertAdjacentHTML("beforeend", username + "<p> you are logged in!</p>")
            console.log(username + " you are logged in!");
        } 
    }
});

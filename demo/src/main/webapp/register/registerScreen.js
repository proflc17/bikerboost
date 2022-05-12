/*const registerUser = () => {
    let registrationData = {
        firstname : document.getElementById("firstname").value,
        username : document.getElementById("userRegister").value,
        email : document.getElementById("email").value,
        password : document.getElementById("pwdRegister").value
    }
    fetch('/demo-1.0-SNAPSHOT/api/register',
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(registrationData)
        })
        .then(response => {
            //window.location.href = "/demo-1.0-SNAPSHOT/login/loginScreen.html"; // = './loginScreen.html'
            _jwt = response.headers.get("Authorization");
            document.getElementById("jwt").innerHTML = _jwt;
            return response.json()
        }).catch(err => console.log(err))

}*/

const signUpUser = () => {
    var emailArray = [];
    var passwordArray = [];
    var usernameArray = [];
    var nameArray = [];

    function register() {
        event.preventDefault();
        var name = document.getElementById("nameR").value;
        var username = document.getElementById("usernameR").value;
        var email = document.getElementById("emailR").value;
        var password = document.getElementById("passwdR").value;
        var passwordRetype = document.getElementById("repeatPasswd").value;

        if (name == "") {
            alert("Name required.");
            return;
        } else if (username == "") {
            alert("Email required.");
            return;
        } else if (email == "") {
            alert("Email required.");
            return;
        } else if (password == "") {
            alert("Password required.");
            return;
        } else if (passwordRetype == "") {
            alert("Password required.");
            return;
        } else if (password != passwordRetype) {
            alert("Password don't match, retype your Password.");
            return;
        } else if (emailArray.indexOf(email) == -1) {
            emailArray.push(email);
            passwordArray.push(password);
            usernameArray.push(username);
            nameArray.push(name);

            alert(email + "  Thanks for registration. \nTry to login Now");

            document.getElementById("nameR").value = "";
            document.getElementById("usernameR").value = "";
            document.getElementById("emailR").value = "";
            document.getElementById("passwdR").value = "";
            document.getElementById("repeatPasswd").value = "";
        } else {
            alert(email + " is already registered.");
            return;
        }
    }
}
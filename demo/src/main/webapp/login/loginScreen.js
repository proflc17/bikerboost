/*const loginUser = () => {
    let loginData = {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value
    }
    fetch('/demo-1.0-SNAPSHOT/api/login',
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginData)
        })
        .then(response => {
            _jwt = response.headers.get("Authorization");
            localStorage.setItem('jwt', _jwt);

            window.location.href = "/demo-1.0-SNAPSHOT/user/userScreen.html"
            document.getElementById("jwt").innerHTML = _jwt;
            return response.json()
        }).catch(err => console.log(err))
}*/

/*const loginUser = () => {
    let email = document.getElementById("email").value
    let passwd = document.getElementById("passwd").value
    let loginData = {
        username: email,
        password: passwd
    }
    fetch('./api/login',
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginData)
        })
        .then(response => {
            _jwt = response.headers.get("Authorization");
            document.getElementById("jwt").innerHTML = _jwt;
            return response.json()
        }).catch(err => console.log(err))
}*/

const loginUser = () => {
    var emailArray = [];
    var passwordArray = [];

    function login() {
        event.preventDefault();
        var email = document.getElementById("emailL").value;
        var password = document.getElementById("passwdL").value;

        var i = emailArray.indexOf(email);

        if (emailArray.indexOf(email) == -1) {
            if (email == "") {
                alert("Email required.");
                return;
            }
            alert("Email does not exist.");
            return;
        } else if (passwordArray[i] != password) {
            if (password == "") {
                alert("Password required.");
                return;
            }
            alert("Password does not match.");
            return;
        } else {
            document.getElementById("email").value = "";
            document.getElementById("passwd").value = "";
            return;
        }

    }
}
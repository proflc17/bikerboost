const registerUser = () => {
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

}
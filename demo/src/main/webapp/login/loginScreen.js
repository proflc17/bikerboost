const loginUser = () => {
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
}
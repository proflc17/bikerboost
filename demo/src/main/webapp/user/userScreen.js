const returnToLoginScreen = () => {
    let targetURL = 'http://localhost:63342/BikerBoostGit/demo/src/main/webapp/login/loginScreen.html?_ijt=rl1t6meqpfa28hfa47lg2gpvid';
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}

const createCode = () => {

}

const joinMeeting = () => {

}
const axios = require('axios').default;

document.getElementById('SignInButton').onclick = function GetSignInForm() {
    console.log('Hi');
    axios.get('/auth/singin');
};

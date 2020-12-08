var warningMessageLogin = document.getElementById("warningMessageLogin");
var isUserNameValid, isEmailValid;
var registerButton = document.getElementById('createAccButton');


function setCurrentLoggedUser(user){
    sessionStorage.setItem("currentLoggedUser",user);
}


function validateFormLogin() {
    let userName = document.getElementById('userName');
    let password = document.getElementById('password');


    if (userName.value != "" && password.value != "") {
        warningMessageLogin.style.display = "none";
        validateLogin(userName.value, password.value);
    }
    else {
        warningMessageLogin.innerText = "*Preencha todos os campos";
        warningMessageLogin.style.display = "inline";
    }

}


function validateLogin(user, pass) {
    let response;
    let x = new XMLHttpRequest();
    x.onload = () => {
        console.log(x.response);
        //console.log(JSON.parse(x.responseText));
        let res = x.response;

        if (res=="1") {
            setCurrentLoggedUser(user);
            window.location.href = './index.html';
        }
        else {
            toggleErrorMessage("*login ou senha incorretos", "inline-block");
        }
    }

    x.open('POST', './server/actions/validateLogin.php');
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.send(`userName=${user}&password=${pass}`);
}


function validateUserName(user) {
    let response;
    let x = new XMLHttpRequest();
    x.onload = () => {
        //console.log(x.responseText);
        //console.log(JSON.parse(x.responseText));
        let res = x.responseText;

        if (res == 'true') {
            warningMessageLogin.style.display = "none";
            isUserNameValid = true;
        }
        else {
            warningMessageLogin.style.display = "inline-block";
            warningMessageLogin.innerText = "*Nome ja esta sendo utilizado";
            isUserNameValid = false;
        }
    }

    x.open('GET', './server/actions/validateUserName.php?userName=' + user);
    x.send();

}

function validateEmailFormat(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateEmail(email) {
    let response;
    let x = new XMLHttpRequest();
    x.onload = () => {
        //console.log(x.responseText);
        //console.log(JSON.parse(x.responseText));
        let res = x.responseText;

        if (res == 'true') {
            warningMessageLogin.style.display = "none";
            isEmailValid = true;
        }
        else {
            warningMessageLogin.style.display = "inline-block";
            warningMessageLogin.innerText = "*Email ja esta sendo utilizado";
            isEmailValid = false;
        }
    }

    x.open('GET', './server/actions/validateEmail.php?email=' + email);
    x.send();

}



function toggleErrorMessage(message, visi) {
    warningMessageLogin.innerText = message;
    warningMessageLogin.style.display = visi;
}

function validateFormRegister() {
    let user = document.getElementById('registerUser');
    let pass = document.getElementById('registerPass');
    let confirmPass = document.getElementById('confirmPass');
    let email = document.getElementById('email');

    if (user.value != "" && pass.value != "" && confirmPass.value != "" && email.value != "") {
        toggleErrorMessage("", "none");
        if (pass.value == confirmPass.value) {
            if (isUserNameValid && isEmailValid) {
                validateRegister(user.value, pass.value, confirmPass.value, email.value);
            }
            else {
                toggleErrorMessage("*usuario ou email invalido", "inline-block");
            }
        }
        else {
            toggleErrorMessage("*as senhas nao correspondem", "inline-block");
        }
    }
    else {
        toggleErrorMessage("*Preencha todos os campos", "inline-block");
    }


}




function validateRegister(name, password, confirmPass, emailValue) {

    let response;
    let x = new XMLHttpRequest();
    x.onload = () => {
        //console.log(x.responseText);
        //console.log(JSON.parse(x.responseText));
        let res = x.response;

        console.log(res);
        if (res) {
            setCurrentLoggedUser(name);
            window.location.href = './index.html';
        }
        else {
            toggleErrorMessage("*Algo deu errado", "inline-block");
        }
    }

    x.open('POST', './server/actions/validateRegister.php');
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.send(`userName=${name}&password=${password}&email=${emailValue}`);

}

//MAIN
{
    let userRegister = document.getElementById('registerUser');
    let emailRegister = document.getElementById('email');

    document.getElementById("loginButton").onclick = (event) => {
        validateFormLogin();
        event.preventDefault();
    };

    userRegister.onchange = () => {
        if (userRegister.value.length >= 4) {
            validateUserName(userRegister.value);
        }
        else {
            warningMessageLogin.style.display = "inline-block";
            warningMessageLogin.innerText = "*Nome deve pelo menos 4 caracteres";
        }
    };

    emailRegister.onchange = () => {
        if (validateEmailFormat(emailRegister.value)) {
            warningMessageLogin.style.display = "none";
            validateEmail(emailRegister.value);
        }
        else {
            warningMessageLogin.style.display = "inline-block";
            warningMessageLogin.innerText = "Formato de email invalido";
        }
    }

    emailRegister.onblur=()=>{
        if (validateEmailFormat(emailRegister.value)) {
            warningMessageLogin.style.display = "none";
            validateEmail(emailRegister.value);
        }
        else {
            warningMessageLogin.style.display = "inline-block";
            warningMessageLogin.innerText = "Formato de email invalido";
        }
    }

    registerButton.onclick = (event) => {
        validateFormRegister();
        event.preventDefault();
    }

    console.log(userRegister);
    console.log(registerButton);

}
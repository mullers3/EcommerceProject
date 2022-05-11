import {fetchData, getCurrentCustomer, setCurrentCustomer, removeCurrentCustomer} from "./main.js";
const loginForm = document.getElementById("logForm");
if(loginForm) loginForm.addEventListener('submit', login)

function login(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;//what do you mean undefined
    const pass = document.getElementById("pass").value;
    console.log(email, pass);
    fetchData('/customer/login', {email: email, password: pass}, "POST")// not finding login??
    .then((data) => {
        if(!data.message) {
            setCurrentCustomer(data);
            window.location.href = "account.html"; //don't know about that tho
        }
    })
    .catch((error) => {
        const errText = error.message;
        document.querySelector("p.error").innerHTML = errText;
        console.log(`Error! ${errText}`)
    });
}

const regForm = document.getElementById("regForm"); 
if(regForm) regForm.addEventListener('submit', register);

function register(e){
    e.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const bday = document.getElementById("bday").value;

    fetchData('/customer/register', {fname: fname, lname: lname, email:email, pass:pass, bday:bday}, "POST")
    .then((data) => {
        if(!data.message){
            setCurrentCustomer(data);
            window.location.href = "home.html";
    }
    })
    .catch((error) => {
        const errText = error.message;
        document.querySelector("p.error").innerHTML = errText;
        document.getElementById("pass").value =""; 
        console.log(`Error! ${errText}`)
    });
}






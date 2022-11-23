const pass = document.getElementById("password");
const form = document.getElementById("form");

validation = () => {
    if (pass.value == "1234") {
        location.href = 'index.html';
    }
    else {
        alert("Acceso denegado!");
    }
}
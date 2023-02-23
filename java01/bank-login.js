//step1:add click event handler in submit btn
document.getElementById("btn-submit").addEventListener('click', function () {
    console.log("submitted");
    //step2: get email address
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //step3:get password
    const userPass = document.getElementById('user-pass');
    const password = userPass.value;
    console.log(email, password);

    if (email === "asd" && password === "asd") {
        window.location.href = "bank2.html";
    }
    else {
        alert("you are invalid");
    }
})
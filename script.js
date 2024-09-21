let formData = {
    name: "",
    mail: "",
    number: ""
};

let formEle = document.getElementById('my-form');

let nameEle = document.getElementById('name');
let nameErr = document.getElementById('nameErr');

let mailEle = document.getElementById('mail');
let mailErr = document.getElementById('mailErr');

let numberEle = document.getElementById('number');
let numberErr = document.getElementById('numberErr');

let successEle = document.getElementById('success')


nameEle.addEventListener("blur", function () {
    if (nameEle.value === "") {
        nameErr.textContent = "Required*";
    } else {
        nameErr.textContent = "";
    }
    formData.name = nameEle.value;
});


mailEle.addEventListener("blur", function () {
    if (mailEle.value === "") {
        mailErr.textContent = "Required*";
    } else {
        mailErr.textContent = "";
    }
    formData.mail = mailEle.value;
});


numberEle.addEventListener("blur", function () {
    if (numberEle.value === "") {
        numberErr.textContent = "Required*";
    } else {
        numberErr.textContent = "";
    }
    formData.number = numberEle.value;
});


function validateData(formData) {
    let { name, mail, number } = formData;
    let valid = true;

    if (name === "") {
        nameErr.textContent = "Required*";
        valid = false;
    }
    if (mail === "") {
        mailErr.textContent = "Required*";
        valid = false;
    }
    if (number === "") {
        numberErr.textContent = "Required*";
        valid = false;
    }

    return valid;
}


formEle.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting
    if (validateData(formData)) {
        successEle.textContent = "Order Placed Thankyou You Can Close This Window";
        console.log(formData);
    }
});

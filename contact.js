function contactUs() {
    var inputName = document.form.name.value;
    var inputEmail = document.form.email.value;
    var inputSubject = document.form.subject.value;
    var inputMessage = document.form.message.value;

    if (inputName === "") {
        document.getElementById("contact2").style.display = "block";
        document.getElementById("contact3").style.display = "none";
        document.getElementById("contact4").style.display = "none";
        document.getElementById("contact5").style.display = "none";
        document.getElementById("contact1").style.display = "none";
        document.getElementById("contact6").style.display = "none";
        return false;
    }
    if (inputEmail === "") {
        document.getElementById("contact3").style.display = "block";
        document.getElementById("contact2").style.display = "none";
        document.getElementById("contact4").style.display = "none";
        document.getElementById("contact5").style.display = "none";
        document.getElementById("contact1").style.display = "none";
        document.getElementById("contact6").style.display = "none";
        return false;
    }
    if (inputSubject === "") {
        document.getElementById("contact4").style.display = "block";
        document.getElementById("contact3").style.display = "none";
        document.getElementById("contact2").style.display = "none";
        document.getElementById("contact5").style.display = "none";
        document.getElementById("contact1").style.display = "none";
        document.getElementById("contact6").style.display = "none";
        return false;
    }
    if (inputMessage === "") {
        document.getElementById("contact5").style.display = "block";
        return false;
    } else {
        document.getElementById("contact1").style.display = "block";
        document.getElementById("contact2").style.display = "none";
        document.getElementById("contact3").style.display = "none";
        document.getElementById("contact4").style.display = "none";
        document.getElementById("contact5").style.display = "none";
        document.getElementById("contact6").style.display = "none";
        return true;
    }
}

function contactUs1() {
    var inputName1 = document.form1.name1.value;
    var inputEmail1 = document.form1.email1.value;
    var inputSubject1 = document.form1.subject1.value;
    var inputMessage1 = document.form1.message1.value;

    if (inputName1 === "") {
        document.getElementById("contact21").style.display = "block";
        document.getElementById("contact31").style.display = "none";
        document.getElementById("contact41").style.display = "none";
        document.getElementById("contact51").style.display = "none";
        document.getElementById("contact11").style.display = "none";
        document.getElementById("contact61").style.display = "none";
        return false;
    }
    if (inputEmail1 === "") {
        document.getElementById("contact31").style.display = "block";
        document.getElementById("contact21").style.display = "none";
        document.getElementById("contact41").style.display = "none";
        document.getElementById("contact51").style.display = "none";
        document.getElementById("contact11").style.display = "none";
        document.getElementById("contact61").style.display = "none";
        return false;
    }
    if (inputSubject1 === "") {
        document.getElementById("contact41").style.display = "block";
        document.getElementById("contact31").style.display = "none";
        document.getElementById("contact21").style.display = "none";
        document.getElementById("contact51").style.display = "none";
        document.getElementById("contact11").style.display = "none";
        document.getElementById("contact61").style.display = "none";
        return false;
    }
    if (inputMessage1 === "") {
        document.getElementById("contact51").style.display = "block";
        document.getElementById("contact21").style.display = "none";
        document.getElementById("contact31").style.display = "none";
        document.getElementById("contact41").style.display = "none";
        document.getElementById("contact11").style.display = "none";
        document.getElementById("contact61").style.display = "none";
        return false;
    } else {
        document.getElementById("contact11").style.display = "block";
        document.getElementById("contact21").style.display = "none";
        document.getElementById("contact31").style.display = "none";
        document.getElementById("contact41").style.display = "none";
        document.getElementById("contact51").style.display = "none";
        document.getElementById("contact61").style.display = "none";
        return true;
    }
}
const mark = document.querySelectorAll(".allContact");
mark.forEach(eachMark => {
    eachMark.addEventListener("input", () => {
        checkEmptyContact();
        if (eachMark.value === "") {
            document.getElementById("contact6").style.display = "block";
            document.getElementById("contact2").style.display = "none";
            document.getElementById("contact3").style.display = "none";
            document.getElementById("contact4").style.display = "none";
            document.getElementById("contact5").style.display = "none";
            document.getElementById("contact1").style.display = "none";
        } else if (eachMark.value !== "") {
            document.getElementById("contact6").style.display = "none";
        }
    });
});
const order = document.querySelectorAll(".allMail");
order.forEach(orderAlert => {
    orderAlert.addEventListener("input", () => {
        checkEmptyMailUs();
        if (orderAlert.value === "") {
            document.getElementById("contact61").style.display = "block";
            document.getElementById("contact21").style.display = "none";
            document.getElementById("contact31").style.display = "none";
            document.getElementById("contact41").style.display = "none";
            document.getElementById("contact51").style.display = "none";
            document.getElementById("contact11").style.display = "none";
        } else if (orderAlert.value !== "") {
            document.getElementById("contact61").style.display = "none";
        }
    });
});
const checkEmptyContact = () => {
    const inputSelectorsReact = document.querySelectorAll(".allContact");
    let oneEmptyReact = false;
    for (let i = 0; i < inputSelectorsReact.length; i++) {
        const selectorReact = inputSelectorsReact[i];
        if (selectorReact.value === "") {
            oneEmptyReact = true;
            break;
        }
    }
    const submitBtnReact = document.querySelector(".btn-contact");

    if (oneEmptyReact) {
        submitBtnReact.disabled = true;
    } else {
        submitBtnReact.disabled = false;
    }
};
const checkEmptyMailUs = () => {
    const inputSelectorsuiux = document.querySelectorAll(".allMail");
    let oneEmptyuiux = false;
    for (let i = 0; i < inputSelectorsuiux.length; i++) {
        const selectoruiux = inputSelectorsuiux[i];
        if (selectoruiux.value === "") {
            oneEmptyuiux = true;
            break;
        }
    }
    const submitBtnuiux = document.querySelector(".btn-mailus");

    if (oneEmptyuiux) {
        submitBtnuiux.disabled = true;
    } else {
        submitBtnuiux.disabled = false;
    }
};
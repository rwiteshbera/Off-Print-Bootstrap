//Show warning when a link has been clicked which has not beenc created yet
var numberOfLinks = document.querySelectorAll('.js-alert-rb').length;

for (var i = 0; i < numberOfLinks; i++) {
    document.querySelectorAll(".js-alert-rb")[i].addEventListener("click", function () {
        alert("This page has not been created yet.");
    });
}

//Subscribe to our newsletter alert
function validateForm() {
    var x = document.forms["myForm"]["fEmail"].value;
    if (x == "") {
        document.getElementById("alertBody-RB").innerHTML = "Enter a valid email id.";
        document.getElementById("exampleModalLabel").innerHTML = "Alert";
        return false;
    }
    else {
        document.getElementById("alertBody-RB").innerHTML = "Thank you for joining our newsletter.";
    }
}

document.getElementById('subscribe').addEventListener("click", validateForm);
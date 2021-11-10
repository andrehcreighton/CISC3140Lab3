// Created an event listener for the button in the html file that will fire up this function when clicked.
document.getElementById("bttn").addEventListener("click", function() {

    var email = document.getElementById("email").value; // value from email input
    var pass = document.getElementById("pass").value; // value ftom password input

    /*
            If validateEmail and validatePassword comes back as true, then the 
            user successfully entered login information, otherwise, something was not formatted
            correctly betweent the two inputs.
    */
    if (validateEmail(email) && validatePassword(pass)) {
        //console.log("login successful");
        document.getElementById("p").innerHTML = "Login Successful!";
    } else {
        //console.log("Error with formatting");
        document.getElementById("p").innerHTML = "Hmm, Check your formatting.";
    }

});

// Returns a bool based on whether the email inputted matches the the regex predicate ex. someone@someone.com
function validateEmail(e) {
    console.log(e);
    const emailFormatRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailFormatRe.test(String(e).toLowerCase());
}

// Returns a bool based on whether the password inputted matches the the regex predicate
// Must have a integer, lowercase, uppercase and must be atleast 8 characters. Can contain special characters.
function validatePassword(p) {
    const passwordFormatRe = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordFormatRe.test(String(p));
}
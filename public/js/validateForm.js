function validateForm() {
    let fname = document.forms["userForm"]["first_name"].value;
    let lname = document.forms["userForm"]["last_name"].value;
    let mob = document.forms["userForm"]["mobile"].value;
    let email = document.forms["userForm"]["email"].value;
    if (fname == "") {
        //alert("First name must be filled out");
        return false;
    } else if (lname == "") {
        //alert("Last name must be filled out");
        return false;
    } else if (mobile == "") {
        //alert("Mobile number must be filled out");
        return false;
    }
    else if (email == "") {
        //alert("Email must be filled out");
        return false;
    }
}

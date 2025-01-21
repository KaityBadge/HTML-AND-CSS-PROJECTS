//FORM VALIDATION
function validateForm(){
    let x = document.forms["contactForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
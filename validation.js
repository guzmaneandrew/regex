// validation script here
//let regExp = /[a-z]/ig;
//let regExp2 = new RegExp(/[a-z]/, 'ig');
const inputs = document.querySelectorAll("input");

const patterns = {
    // ^$ symbols to indicate start/end of string
    phone: /^\d{10}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    url: /^[a-z\d-]{8,20}$/,
            //name @  domain . extention . optional
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

// adds class valid if input matches regex pattern, adds class invalid if no match is found
function validate(field, regex){
    //regex.test(field.value);
    if(regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
}

inputs.forEach((input)=>{
    input.addEventListener("keyup", (event)=> {
        validate(event.target, patterns[event.target.attributes.name.value]);
    });
});
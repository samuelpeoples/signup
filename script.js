var password = document.querySelector("#password");
var passwordConfirm = document.querySelector("#confirm-password");

function validatePassword() {
	if (password.value != passwordConfirm.value) {
		passwordConfirm.setCustomValidity("Passwords do not match");
	} else {
		passwordConfirm.setCustomValidity("");
	}
}

password.onchange = validatePassword;
passwordConfirm.onkeyup = validatePassword;

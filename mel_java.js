
function myForm(form) {
	var userName = form.name.value;
	var userEmail = form.email.value;
	var userPhone = form.phone.value;
	var filled = 1;

	if(!userName) {
		filled =0;
	}

	if(!userEmail) {
		filled = 0;
	}

	if(!userPhone) {
		filled = 0;
	}

	if(!filled) {
		alert("Oops! Looks like you left something out!");
		return false;
	}

	else{
		alert("Get ready for panda facts!");
		return true;
	}
}

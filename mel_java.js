function myForm(form) {
	var userName = form.name.value;
	var userEmail = form.email.value;
	var success = 1;

	if(!userName) {
		success =0 ;
	}

	if(!userEmail) {
		success = 0;
	}

	if(!success) {
		alert("Oops! Looks like you left something out!");
		return false;
	}

	else{
		alert("Get ready for panda facts!");
		return true;
	}
}

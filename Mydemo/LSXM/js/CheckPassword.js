//检查密码是否一致
function CheckPassword() {
	var pswd1 = document.getElementById("password");
	var pswd2 = document.getElementById("again_password");
	if(pswd1.value != pswd2.value) {
		alert("密码不一致");
		return false;
	}
}
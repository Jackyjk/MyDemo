//测验表单
function login() {
	var account = $("#account").val();
	var pswd = $("#password").val();
	$.ajax({
		//几个参数需要注意一下
		type: "GET", //方法类型
		dataType: "JSON", //预期服务器返回的数据类型
		//url: "http://localhost:8080/user/logout", //url
		url: "http://10.1.1.211:8080/user/login",
		crossDomain: true,
		data: {
			"account": account,
			"password": pswd,
		},

		success: function(data) {
			alert(data.code + "---" + data.message);
			if(data.code === 0) {

				window.location.href = 'lalala.html';
			}
		},
		error: function(data) {
			alert("error" + data)
			window.location.href = 'index.html';
		}
	});
}
//测验密码账号是否为空
function check() {
	if($("#account").val() == "") {
		alert("请输入账号！");
		formname.account.focus();
		return false;

	}
	if($("#password").val() == "") {
		alert("请输入密码！");
		formname.password.focus();
		return false;
	}

}
function mydate() {
			var myDate = new Date();
			var year = myDate.getFullYear();
			var month = myDate.getMonth() + 1;
			var day = myDate.getDate();
			var hour = myDate.getHours();
			var minute = myDate.getMinutes();
			var second = myDate.getSeconds();
			if(day<10){
				day = "0"+day;
			}
			if(month<10)
				month = "0"+month;
			if(hour<10)
				hour = "0"+hour;
			if(minute<10)
				minute = "0"+minute;
			if(second<10)
				second = "0"+second;
			

			return (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);
		}
//注册测验表单
function register() {
	var account = $("#account").val();
	var pswd = $("#password").val();
	//var pswd2 = $("#again_password").val();
	var name = $('#name').val();
	var sex = $('#sex').val();
	var phone = $('#phone').val();
	var education = $('#education').val();
	var major = $('#major').val();
	var email = $('#email').val();
	var status = $('#status').val();
	var bankNumber = $('#bankNumber').val();
	var gmt_create = mydate();
	var gmt_modified = mydate(document.lastModified);
	//alert(gmt_modified);
	//var code_language = JSON.stringify(($('#code_language').val()).split(" "));
	$.ajax({
		//几个参数需要注意一下
		type: "POST", //方法类型
		dataType: "JSON", //预期服务器返回的数据类型
		url: "http://10.1.1.211:8080/user/register", //url
		crossDomain: true,
		data: {
			"account": account,
			"password": pswd,
			//"again_password":pswd2,
			"name": name,
			"sex": sex,
			"phone": phone,
			"email": email,
			"bank_number":bankNumber,
			"education": education,
			"major": major,
			"status": status,
			//"code_language": code_language,
			"gmt_create": gmt_create,
			"gmt_modified": gmt_modified,
		},
		success: function(data) {
			//alert(data.code + "---" + data.message)
			if(data.code === 0) {
				alert(data.code + "---" + data.message)
				//console.log("pass!");
				window.location.href = 'index.html';
			}
		},
		error: function(data) {
			alert("error" + data)
			//console.log("error!");
			//window.location.href = 'Regis.html';
		}
	});

}
/*
function register() {
	var account = $("#account").val();
	var pswd = $("#password").val();
	//var pswd2 = $("#again_password").val();
	var name = $('#name').val();
	var sex = $('#sex').val();
	var phone = $('#phone').val();
	var education = $('#education').val();
	var major = $('#major').val();
	var email = $('#email').val();
	var status = $('#status').val();
	var bankNumber = $('#bankNumber').val();
	var gmt_create = mydate();
	var gmt_modified = mydate(document.lastModified);
	//alert(gmt_modified);
	//var code_language = JSON.stringify(($('#code_language').val()).split(" "));
	
		$.ajax({
		//几个参数需要注意一下
		type: "POST", //方法类型
		dataType: "JSON", //预期服务器返回的数据类型
		url: "http://10.1.1.211:8080/user/", //url
		crossDomain: true,
		data: {
			"account": account,
			"password": pswd,
			//"again_password":pswd2,
			"name": name,
			"sex": sex,
			"phone": phone,
			"email": email,
			"bankNumber":bankNumber,
			"education": education,
			"major": major,
			"status": status,
			//"code_language": code_language,
			"gmtCreate": gmt_create,
			"gmtModified": gmt_modified,
		},
		success: function(data) {
			alert(data.code + "---" + data.message)
			if(data.code === 0) {
				alert(data.code + "---" + data.message);
				alert("pass!");
				window.location.href = 'index.html';
			}
		},
		alert("未知错误!");
		error: function(data) {
			alert("error" + data);
			console.log("error!");
			
			//window.location.href = 'Regis.html';
		}
	});
}*/

//检查密码是否一致
function CheckPasswordAndPhone() {
	var pswd1 = $("#password").val();
	var pswd2 = $("#again_password").val();
	if(pswd1 != pswd2) {
		alert("密码不一致，请重新输入密码！");
		window.location.href = 'Regis.html';
		return false;
	} 
	var phone = $("#phone").val();
	if(phone) {
		if(!(/^1[34578]\d{9}$/.test(phone))) {
			alert("手机号码有误，请重填");
			return false;
		}
		
	}
}

//检查手机号码是否正确
/*function CheckPhone() {

	var phone = $("#phone").val();
	if(phone) {
		if(!(/^1[34578]\d{9}$/.test(phone))) {
			alert("手机号码有误，请重填");
			return false;
		}
		
	}

}*/
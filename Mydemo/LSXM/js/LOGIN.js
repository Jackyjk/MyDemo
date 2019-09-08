function login() {
	var account = $("#account").val();
	var pswd = $("#password").val();
	$.ajax({
		//几个参数需要注意一下
		type: "GET", //方法类型
		dataType: "JSON", //预期服务器返回的数据类型
		//url: "http://localhost:8080/user/logout", //url
		url: "http://10.1.1.249:8080/user/login",
		crossDomain: true,
		data: {
			"account": account,
			"password": pswd,
		},

		success: function(data) {
			alert(data.code + "---" + data.message)
			if(data.code === 0) {
				alert(data.code + "---" + data.message)
				//window.location.href = '登陆后的界面';
			}
		},
		error: function(data) {
			alert("error" + data)
			//失败返回登录页面
			window.location.href = 'Login1.html';
		}
	});
}
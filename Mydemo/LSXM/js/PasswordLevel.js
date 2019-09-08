window.onload = function() 
{

			var PasswordInput = document.getElementById('password');
			PasswordInput.value = '';
			var sp = document.getElementsByTagName('span');

			PasswordInput.onkeyup = function() 
			{
				//强度状态设为默认
				sp[3].className = sp[4].className = sp[5].className = "default";

				var pwd = this.value;
				var result = 0;
				for(var i = 0, len = pwd.length; i < len; ++i) 
				{
					result |= charType(pwd.charCodeAt(i));    
					//返回pwd第i位的Unicode编码
				}

				var PasswordLevel = 0;
				//对result进行四次循环，计算其PasswordLevel
				for(var i = 0; i <= 4; i++) 
				{
					if(result & 1) 
					{
						PasswordLevel++;
					}
					//右移一位
					result = result >>> 1;
				}

				if(pwd.length >= 6) 
				{
					//当输入的密码大于6位，进行判断
					switch(PasswordLevel) 
					{
						case 1:
							sp[3].className = "weak";
							break;
						case 2:
							//sp[0].className = "medium";
							sp[4].className = "medium";
							break;
						case 3:
						case 4:
							//sp[0].className = "strong";
							//sp[1].className = "strong";
							sp[5].className = "strong";
							break;
					}
				}
			}
}
		function charType(num) {
			if(num >= 48 && num <= 57) {
				return 1;
			}
			if(num >= 97 && num <= 122) {
				return 2;
			}
			if(num >= 65 && num <= 90) {
				return 4;
			}
			return 8;
		}
		
	/*var accountmajor = document.getElementById("account");
	var majorfinal = document.getElementById("major");
	var SelectMajor = accountmajor.substring(0,6);
	if(SelectMajor == 170601)
	{
		majorfinal = "计算机科学与技术";
	}else if(SelectMajor == 170602)
	{
		majorfinal = "软件工程";				
	}else if(SelectMajor == 170603)
	{
		majorfinal = "信息对抗";
	}else if(SelectMajor == 170603)
	{
		majorfinal = "探测制导";
	}else if(SelectMajor == 170603)
	{
		majorfinal = "网络工程";
	}else if(SelectMajor == 170603)
	{
		majorfinal = "物联网";
	}*/
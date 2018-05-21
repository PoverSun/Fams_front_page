/*
* @Author: liujiajia
* @Date:   2018-03-19 22:37:16
* @Last Modified by:   xiao dong
* @Last Modified time: 2018-04-18 14:51:07
*/
$(function () {
	// 跳转至注册页面
	$("#to-regist-btn").click(function () {
		$(".login-box").addClass("hidden");
		$(".regist-box").removeClass("hidden");
	});
	// 注册后返回登录
	$("#reload-login").click(function(event){
		event.preventDefault();
		$(".login-box").removeClass("hidden");
		$(".regist-box").addClass("hidden");
	});
	// 忘记密码
	$("#forget-pwd-btn").click(function(){
		$(".forget-pwd-box").removeClass("hidden");
		$(".login-box").addClass("hidden");
	});
	$("#reload-login-btn").click(function(event){
		event.preventDefault();
		$(".login-box").removeClass("hidden");
		$(".forget-pwd-box").addClass("hidden")
	});


	// 判断用户
	$("#select-user").change(function () {
	    var str = "";
	    $("#select-user option:selected").each(function () {
	            str += $(this).text() + " ";
	    });
	  	// alert("当前是"+str+"登录");
	}).change();
    
	// 判断数据
	$("#submit-login-btn").click(function(event){
		event.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();
		var captcha = $("#captcha-input").val();
		if(captcha==''||captcha==null){
			alert("验证码不能为空！");
			return
		}
		if(username == '' || username == null){
			alert("用户名不能为空！");
			return
		}
		if(password == '' || password == null){
			alert("密码输入不能为空！");
			return
		}
		alert("用户名："+username+"\n"+"密码："+password+"验证码："+captcha);
	});
});

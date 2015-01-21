$(function(){
	$("body").on("click", "#refreshimg", function(){
		$.post("newsession.php");
		$("#captchaimage").load("image_req.php");
		return false;
	});
	
	$("#submit").click(function(){
		$("#captchaform").validate({
			rules: {
				captcha: {
					required: true,	
					//remote:"process.php",		
					remote: {
						url: "process.php",
						type: "post",
						data: {
							captcha: function() {
								return $( "#captcha" ).val();
							}
						}
					}
				}
			},
			messages: {
				captcha: "验证码是必填项，请重新输入正确的验证码"
			},
			submitHandler: function() {
				alert("验证码输入正确!");
			},
			success: function(label) {
				label.addClass("valid").text("验证码正确！")
			},
			onkeyup: false
		});
		$("#captchaform").submit();
		
	})

	

});

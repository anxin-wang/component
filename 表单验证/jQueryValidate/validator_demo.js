//depends属性
$(".selector").validate({
	rules: {
		contact: {
		required: true,
			email: {
				depends: function(element) {
					return $("#contactform_email").is(":checked");
				}
			}
		}
	}
});
//传参数，并加一个depends的回调
$(".selector").validate({
	rules: {
		// at least 15€ when bonus material is included
		pay_what_you_want: {
			required: true
			min: {
			// min needs a parameter passed to it
				param: 15,
				depends: function(element) {
					return $("#bonus-material").is(":checked");
				}
			}
		}
	}
});

//格式化消息输出
//Example: Provides a callback message using jQuery.format to avoid having to specify the parameter in two places.
$(".selector").validate({
	rules: {
			name: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			name: {
				required: "We need your email address to contact you",
				minlength: jQuery.format("At least {0} characters required!")
			}
	}
});

//分组验证
//Example: Use a table layout for the form, placing error messags in the next cell after the input.
$("#myform").validate({
	groups: {
		username: "fname lname"
	},
	errorPlacement: function(error, element) {
		if (element.attr("name") == "fname" || element.attr("name") == "lname" ) {
			error.insertAfter("#lastname");
		} else {
			error.insertAfter(element);
		}
	}
});

//Example: Highlights an invalid element by fading it out and in again.
$(".selector").validate({
highlight: function(element, errorClass) {
$(element).fadeOut(function() {
$(element).fadeIn();
});
}
});

//Example: Adds the error class to both the invalid element and its label
$(".selector").validate({
highlight: function(element, errorClass, validClass) {
$(element).addClass(errorClass).removeClass(validClass);
$(element.form).find("label[for=" + element.id + "]")
.addClass(errorClass);
},
unhighlight: function(element, errorClass, validClass) {
$(element).removeClass(errorClass).addClass(validClass);
$(element.form).find("label[for=" + element.id + "]")
.removeClass(errorClass);
}
});
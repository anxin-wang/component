//加上自己扩展的，总共1394行

(function( factory ) {
	//Javascript模块加载方案有CMD和AMD两种. 这段代码就是为了支持AMD加载.
	//意思是: 如果是AMD的loader在加载jQuery, 则define(factory);(define是AMD模块定义的方法).
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {
	//扩展对象方法
	$.extend($.fn, {
		
		validate: function( options ) {},  //OK
		valid: function() {},//OK
		removeAttrs: function( attributes ) {},//OK
		rules: function( command, argument ) {}//OK
	});
	//扩展选择器
	//Omit
	$.extend( $.expr[ ":" ], {
		blank: function( a ) {},
		filled: function( a ) {},
		unchecked: function( a ) {}
	});
	//validator对象构造器
	$.validator = function( options, form ) {};//OK
	//validator的方法扩展
	$.validator.format = function( source, params ) {};
	//validator的属性，方法添加     246~1341
	$.extend( $.validator, {
		//validator的默认参数
		defaults:{},  //OK
		//将自定义的属性覆盖defaults参数
		setDefaults: function( settings ){},   //OK ,手动更改上面的defaults参数
		//验证规则对应的默认消息，可以与$.validator.format一起使用
		messages:{},  //OK
		autoCreateRanges: false,
		//337~928
		prototype: {
			init: function(){}, 
			form: function(){},
			checkForm: function(){},
			element: function( element ){} ,
			showErrors: function( errors ){},
			resetForm: function(){},
			numberOfInvalids: function(){},
			objectLength: function( obj ){},
			hideErrors: function(){},
			hideThese: function( errors ){},
			valid: function(){},
			size: function(){},
			focusInvalid: function(){},
			findLastActive: function(){} ,
			elements: function(){},
			clean: function( selector ){},
			errors: function(){},
			reset: function(){},
			prepareForm: function(){},
			prepareElement: function( element ){},
			elementValue: function( element ){},
			check: function( element ){},
			customDataMessage: function( element, method ){},
			customMessage: function( name, method ){},
			findDefined: function(){},
			defaultMessage: function( element, method ){},
			formatAndAdd: function( element, rule ){},
			addWrapper: function( toToggle ){},
			defaultShowErrors: function(){},
			validElements: function(){},
			invalidElements: function(){},
			showLabel: function( element, message ){},
			errorsFor: function( element ){},
			idOrName: function( element ){},
			validationTargetFor: function( element ){},
			checkable: function( element ){},
			findByName: function( name ){},
			getLength: function( value, element ){} ,
			depend: function( param, element ){},
			dependTypes:{},
			optional: function( element ){},
			startRequest: function( element ){},
			stopRequest: function( element, valid ){},
			previousValue: function( element ){}
		},
		//验证规则的设置
		classRuleSettings:{},  //OK
		addClassRules: function( className, rules ){},//OK
		//通过class添加rules
		classRules: function( element ){},//OK
		//通过属性添加rules
		attributeRules: function( element ){},//OK
		//通过data属性添加rules
		dataRules: function( element ) {},
		staticRules: function( element ){},
		normalizeRules: function( rules, element ){},
		normalizeRule: function( data ) {},//OK
		//添加规则的方法
		addMethod: function( name, method, message ){},//OK
		//验证规则的定义
		methods:{}   //OK
	});
	
	//
	var pendingRequests = {},ajax;
	if ( $.ajaxPrefilter ) {
		$.ajaxPrefilter(function( settings, _, xhr ){});
	} else {
		// Proxy ajax
		ajax = $.ajax;
		$.ajax = function( settings ){};
	}
	//策略模式       
	$.extend($.fn, {
		validateDelegate: function( delegate, type, handler ) {
			return this.bind(type, function( event ) {
				var target = $(event.target);
				if ( target.is(delegate) ) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
}));
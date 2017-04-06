//方法模块，输出一个function
define(function(require){

	return function deal(data){

		var result = JSON.parse(JSON.stringify(data));
		result.name = "yangmi&&qiangmin";
		return result;
	}
	
});





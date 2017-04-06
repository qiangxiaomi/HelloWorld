// require.config({

//     baseUrl: "src",
// 	paths:{

// 		"A":"../dep/A.js",
// 		"B":"../dep/B.js",
// 		"C":"../dep/C.js"
// 	}
// });

require(['./A.js','./B.js','./C.js'],function(A,B,C){ 

	var c = new C();//创建一个新对象
	c.render(B(A));
});


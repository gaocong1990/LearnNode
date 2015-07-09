var exec = require("child_process").exec;
function start(response){
	console.log("Request handler 'start' was called.");
	
	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html;'+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" method="post">'+
		'<textarea name="text" row="20" cols="60"></textarea>'+
		'<input type="submit" value="提交" />'+
		'</form>'+
		'</body>'+
		'</html>';
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(body);
		response.end();
	// exec("dir d:",{timeout: 10000, maxBuffer:20000*1024},
		// function(error, stdout, stderr){
		// response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
		// response.write(stdout);
		// response.end();
	// });
	// function sleep(milliSeconds){
		// var startTime = new Date().getTime();
		// while(new Date().getTime() < startTime+milliSeconds);
	// }
	
	// sleep(10000);
	//return "Hello Start.";
}

function upload(response){
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	respose.end();
}

exports.start = start;
exports.upload = upload;
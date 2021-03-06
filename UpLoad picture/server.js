 var http = require("http");
 var url = require("url");
 
 function start(route, handle){
	 function onRequest(request, response){
		 var postData = "";
		 var pathname = url.parse(request.url).pathname;
		 console.log("Request for"+pathname+" received.");
		 request.setEncoding("utf8");
		 request.addEventListener("data", function(postDataChunk){
			 postData += postDataChunk;
			 console.log("Received POST data chunk '" +
			 postDataChunk + "'");
		 });
		 request.addEventListener("end", function(){
			 route(handle,pathname,response,postData);
		 })
		 route(handle, pathname, response);
	}
 
	http.createServer(onRequest).listen(8888);
 	console.log("Server has started."); 

 }
 
 exports.start = start;
var net = require("net");

var server = net.createServer(function(socket){
	socket.on('data', function(data){
	socket.write(data+1);
	});
})

server.listen(8888);

console.log("Server Started!");
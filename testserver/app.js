var server = require('http').createServer();
var io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {
    console.log('socket connected');

    socket.on('disconnect', function () {
        console.log('socket disconnected');
    });

    socket.on('call:scene', function(sceneId){        
        console.log('wow! someone is called scene : ' + sceneId)
        socket.emit('call:scene', 'wow! someone is called scene : ' + sceneId);
    });
    
    socket.on('call:alarm', function(alarmId){
        console.log('wow! someone is called alarm : ' + alarmId)
    	socket.emit('call:alarm', 'wow! someone is called alarm : ' + alarmId);
    });

    setInterval(function(){

        var message = new Date() + " HAHA !";
        
        socket.emit('get:notification', message);

    }, 5000);
});

server.listen(6100, function(){ console.log("listen 6100") });

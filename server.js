var express = require ('express');
var app = express();
var server = require ('http').createServer(app);
var io = require ('socket.io').listen(server);
var os     = require('os');
var ifaces = os.networkInterfaces();
users = [];
connections =[];

server.listen(process.env.PORT || 3000);
console.log('servidor arrancado exitosamente dirigisa a: localhost:3000');

app.use(express.static(__dirname + '/'))  //RUTA BASE CLICK DE ESTO
app.get('/', function(req, res) {
    res.sendFile('index.html');
});
//CONTAR EL NUMERO DE CONEXIONES
io.sockets.on('connection',function (socket) {
    connections.push(socket);
    console.log('conexion: %s sockets en linea', connections.length);
    
    //desconectar
    socket.on('disconnect', function (data) {
        
        users.splice(users.indexOf(socket.username),1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log('desconexion: %s sockets disponibles', connections.length);
    });

    //Envio de mensajes
    socket.on('send message',function (data) {
        io.sockets.emit('new message',{msg: data, user: socket.username});
    });
    //nuevos usuarios
    socket.on('new user',function (data, callback) {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();

    });
//creo el metodo actializar nombres
        function updateUsernames() {
           io.sockets.emit('get users', users); 
        }
});

Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
        }
        
        console.log("Test the chat interface from this device at : ", "https://localhost:8443");
        

        if (alias >= 1) {
            console.log("Multiple ipv4 addreses were found ... ");
            // this single interface has multiple ipv4 addresses
            console.log(ifname + ':' + alias, "https://"+ iface.address + ":3000");
        } else {
            // this interface has only one ipv4 adress
            console.log(ifname, "https://"+ iface.address + ":3000");
        }

        ++alias;
    });
});
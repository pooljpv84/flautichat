# Sala de chat y video chat con Node.js
#### El aplicativo consta de 2 partes escenciales:
##### Una sala de chat (textual) y una sala de video chat.

* Sala de Chat usando sockets.io autor: Paul Velasco.

Video chat usando peerJS [ejemplo del código del video chat](http://ourcodeworld.com/articles/read/496/how-to-create-a-videochat-with-webrtc-using-peerjs-and-node-js) citando al autor: Carlos Delgado.

# Instalación de la sala de chat:

Abrir un terminal dentro de la carpeta `FLAUTI CHAT` e instalar las siguientes dependencias:

```batch
npm install
```
```batch
npm install express
```
```batch
npm install socket.io
```

```batch
npm install -g nodemon
```
# Instalación de video chat:

Abrir otro terminal dentro de la carpeta `FLAUTI CHAT/videochat-peerjs-example-master/server` e instalar las dependencias:

```batch
npm install
```

Abrir otro terminal dentro de la carpeta `FLAUTI CHAT/videochat-peerjs-example-master/public` e instalar las dependencias:

```batch
npm install
```
# Ejecución:

1. Una vez instaladas las dependencias del aplicativo, dirigirse al siguiente directorio `FLAUTI CHAT` y ejecutar:
```batch
node server.js
```
2. Dirigirse al directorio `FLAUTI CHAT/videochat-peerjs-example-master/public` y ejecutar:

```batch
node website-server.js
```
3. Dirigirse al directorio `FLAUTI CHAT/videochat-peerjs-example-master/server` y ejecutar:

```batch
node node peer-server.js
```
Abrir su navegador y probar la funcionalidad del aplicativo :D ...!

# Importante:

No olvidar que se debe cambiar la dirección del host en la línea 16 de `FLAUTI CHAT/videochat-peerjs-example-master/public/source/js/script.js` acuerdo con tu dirección IP.

Tambien se debe cambiar la dirección del host en la línea 256 de `FLAUTI CHAT\index.html` de acuerdo con tu dirección IP.

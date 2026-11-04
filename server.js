const { PeerServer } = require('peer');

PeerServer({
  port: process.env.PORT || 9000,
  path: '/peerjs',
  proxied: true   // necesario detrás del proxy de Render
});
console.log('Servidor listo');

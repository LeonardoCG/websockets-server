

const socketController = (socket) => {
        
        console.log('Cliente conectado', socket.id);

        socket.on('disconnect', () => {
            
            console.log('Cliente desconectado', socket.id);
        })
        
        //emite msj
        socket.on('enviar-mensaje', (payload, callback) => {

            const id = 123445;
            callback( id );
            
            socket.broadcast.emit('enviar-mensaje', payload ); // enviar msg a todos
        })

}


module.exports = {
    socketController
}
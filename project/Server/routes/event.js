
var ioServer; 

/**
 * class for all socket event
 * @param {SocketIO.io} io 
 */
const initSocketEvent = (io) => {
    let ioServer = io; 
    console.log(io)
}


const emitNotification = notifiction => {
    ioServer.emit('notification', notifiction)
}

module.exports = {
    emitNotification, 
    initSocketEvent
}
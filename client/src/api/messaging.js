import store from '../store'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3001')

export function login(username) {
    store.dispatch({
        type: 'LOGIN',
        username
    })
}

export function addMessage(message) {
    socket.emit('new message', message)
}

socket.on('new message', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})
import { io } from 'socket.io-client';


const URL = 'http://localhost:4000';

export const socket = io(URL);

socket.on('connect', () => {
    console.log('Connected to server');
}
);
socket.on('disconnect', () => {
    console.log('Disconnected from server');
}
);
socket.on('message', (message) => {
    console.log('New message:', message);
}
);
socket.on('userConnected', (user) => {
    console.log('User connected:', user);
}
);
socket.on('userDisconnected', (user) => {
    console.log('User disconnected:', user);
}
);
socket.on('typing', (user) => {
    console.log('User is typing:', user);
}
);
socket.on('stopTyping', (user) => {
    console.log('User stopped typing:', user);
}   );
socket.on('error', (error) => {
    console.error('Error:', error);
}
);

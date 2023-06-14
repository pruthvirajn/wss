const express = require('express')
var { Server } = require('ws');

const server = express().use((req, res) => res.send("Hello World")).listen(5000, () => console.log('listening to 5000...'))

const wss = new Server({ server });

wss.on("connection", ws => {
    console.log('Client connected');
    ws.on('message', message => console.log(`Recieved:${message}`));
    ws.on('close', () => console.log('Client disconnected'));
})

// express().get("/",)
# DoclerChat Socket Server

## What is it ?

This is a chat server coded in TypeScript, using Socket.io.

## How does it work ?

This application starts a SocketServer and wait for client to connect. Clients can select a username, and send messages to eachother.

## How to run

First, you need to install node and yarn on your machine.

- Node: [Get Node](https://nodejs.org/en/download/)
- Yarn: [Install Yarn](https://classic.yarnpkg.com/en/docs/install/)

Then, you open a terminal window, and run the following command to start the **DoclerChat Socket Server**:

`yarn dev`

By default, it will listen on port **3003**. If you want to specify another endpoint, you can specify it using the **PORT** environment variable:

`PORT=1234 yarn dev`

## How to build

To build the **DoclerChat Socket Server**, you need to run the following command:

`yarn build`

You can also specify the server address:

`PORT=1234 yarn build`

The build version will be stored in the **dist** folder.

## Implemented features

- [x] Socket server in TypeScript
- [x] Implemented using Socket.io
- [x] Accept clients connection
- [x] Clients can choose a username
- [x] Clients can send messages
- [x] Clients receive messages sent by other
- [x] Clients receive event when another client connects, change his username, or leave

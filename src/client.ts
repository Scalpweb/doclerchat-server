import * as socketio from 'socket.io';

export default class Client {
  private socket: socketio.Socket;
  private username: string = '';

  constructor(_socket: socketio.Socket, _username: string) {
    this.socket = _socket;
    this.username = _username;

    // Handles first connection
    this.socket.on('init', (username: string) => {
      this.username = username !== '' ? username : this.username;
      this.socket.emit('ready', JSON.stringify({ username: this.username }));
      this.socket.broadcast.emit(
        'join',
        JSON.stringify({ username: this.username, date: new Date() })
      );
    });

    // Handles username changes
    this.socket.on('username', (username: string) => {
      this.socket.broadcast.emit(
        'username',
        JSON.stringify({
          previous: this.username,
          new: username,
          date: new Date(),
        })
      );
      this.username = username;
    });

    // Handles writing new messages
    this.socket.on('write', (message: string) => {
      this.socket.broadcast.emit(
        'write',
        JSON.stringify({ username: this.username, date: new Date(), message })
      );
    });
  }

  public leave() {
    this.socket.broadcast.emit(
      'leave',
      JSON.stringify({ username: this.username, date: new Date() })
    );
  }

  public getSocket(): socketio.Socket {
    return this.socket;
  }
}

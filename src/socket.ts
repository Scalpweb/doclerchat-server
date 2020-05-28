import * as socketio from 'socket.io';
import * as http from 'http';
import Client from './client';

export default class SocketServer {
  private io: socketio.Server;
  private connections: Client[];
  private iota: number = 0;

  constructor(server: http.Server) {
    this.io = socketio(server);
    this.connections = [];
  }

  public start(): void {
    this.io.on('connect', (socket: socketio.Socket) => {
      this.iota++;
      const client = new Client(socket, `John Doe ${this.iota}`);
      this.connections.push(client);

      socket.on('disconnect', () => {
        client.leave();
        this.connections = this.connections.filter((c) => c.getSocket().id !== socket.id);
      });
    });
  }

  public stop(): void {
    this.io.close();
  }
}

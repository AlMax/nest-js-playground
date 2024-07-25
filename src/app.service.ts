import { Injectable, Scope  } from '@nestjs/common';
import axios from 'axios';

@Injectable()
// { scope: Scope.REQUEST }
export class AppService {

  private readonly songs = [];

  async create(song): Promise<string[]> {
    this.songs.push(song);
    return this.songs;
  }

  getHello(): string {
    throw new Error("problema");
    return 'Hello World!';
  }
  async callInnerApi(): Promise<string> {
    const response = await axios.get('http://localhost:3000');
    return `Inner API response: ${response.data}`;
  }

  async callMultipleApis(): Promise<string> {
    try {
      return await Promise.all([
        axios.get('http://localhost:3000/api1'),
        axios.get('http://localhost:3000/api2'),
        axios.get('http://localhost:3000/api3')
      ])
      .then((value) => {
        this.songs.push("Hello");
        return `
        API 1 response: ${value[0].data}
        API 2 response: ${value[1].data}
        API 3 response: ${value[2].data}
        Song: ${this.songs}
      `;
      });

      
    } catch (error) {
      throw new Error(`Error calling APIs: ${error.message}`);
    }
  }

  async api1(): Promise<string> {
    // Simulate a task for API 1
    const startTime = new Date().toISOString();
    return await new Promise(resolve => setTimeout(resolve, 2000)).then((resolve) => {
      const currentTime = new Date().toISOString();
      return `API 1 current time: ${currentTime} - ${startTime}`;
    });
    ;
  }

  async api2(): Promise<string> {
    // Simulate a task for API 2
    const currentTime = new Date().toISOString();
    return `API 2 current time: ${currentTime}`;
  }

  async api3(): Promise<string> {
    // Simulate a task for API 3
    const currentTime = new Date().toISOString();
    return `API 3 current time: ${currentTime}`;
  }
}

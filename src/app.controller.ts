import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    try {
      return this.appService.getHello();
    } catch (e) {
      throw new HttpException(e, HttpStatus.EXPECTATION_FAILED);
    }
  }

  @Get('api1')
  async api1(): Promise<string> {
    return await this.appService.api1();
  }

  @Get('api2')
  async api2(): Promise<string> {
    return await this.appService.api2();
  }

  @Get('api3')
  async api3(): Promise<string> {
    return await this.appService.api3();
  }
}

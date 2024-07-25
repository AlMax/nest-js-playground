import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { AppService } from 'src/app.service';

const mockedApp = {
  callMultipleApis() {
    return [{id: "ciao"}];
  }
}

@Module({
  controllers: [SongsController],
  providers: [
    {
      provide: AppService,
      useValue: mockedApp
    }
  ],
})
export class SongsModule {}

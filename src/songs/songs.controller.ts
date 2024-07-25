import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from '../app.service';
import { CreateSongDTO } from './DTO/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly appService: AppService) {}

    @Post()
    Create(@Body() createSong: CreateSongDTO) {
        return this.appService.create(createSong);
    }

    @Get()
    async FindAll() {
        const result = await this.appService.callMultipleApis();
        return result;
        

        return this.appService.callInnerApi().then((value) => {
            return "Fetch all - " + value;
        });
    }

    @Get(':id')
    Find(
        @Param(
            'id',
            new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})
        )
        id: number    
    ) {
        return `Fetch ${id}`;
    }
}

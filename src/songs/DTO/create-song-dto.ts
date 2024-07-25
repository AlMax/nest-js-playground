import { IsArray, IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDTO {
    
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    readonly artists: string[];

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate: Date;

}
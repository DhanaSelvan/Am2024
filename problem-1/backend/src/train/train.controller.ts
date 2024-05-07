import { Body, Controller, Get, Param } from '@nestjs/common';
import { TrainService } from './train.service';

@Controller('train')
export class TrainController {

    constructor(private readonly trainService: TrainService){}

    @Get()
    findAll(){
        return this.trainService.fetchData();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.trainService.fetchOne(id);
        // return id
    }

}

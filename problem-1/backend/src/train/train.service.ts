import { Injectable } from '@nestjs/common';
import { Train } from 'src/dto/traindata.dto';

@Injectable()
export class TrainService {

    trainData: any;

    fetchData(){
        this.trainData = Train;
        
        return this.trainData
    }

    fetchOne(id: string){
        const data = this.fetchData()
        const singleTrain = data.filter( item => item.trainNumber===id)
        return singleTrain
    }
}

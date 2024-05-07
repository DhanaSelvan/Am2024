import { Injectable } from '@nestjs/common';
import { Train } from 'src/dto/traindata.dto';

@Injectable()
export class TrainService {

    trainData: any;

    fetchData(){
        this.trainData = Train;
        const currentTime = new Date()
        const afterAvailable = 30
        const tweleve = new Date(currentTime.getTime()+12*60*60*1000)
        console.log(tweleve)
        return this.trainData
    }

    fetchOne(id: string){
        const data = this.fetchData()
        const singleTrain = data.filter( item => item.trainNumber===id)
        return singleTrain
    }
}

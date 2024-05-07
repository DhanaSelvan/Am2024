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
        // console.log(tweleve)
        const trainList = []

        for(let train of this.trainData){
            const desTime = new Date();
            desTime.setHours(train.departureTime.Hours);
            desTime.setMinutes(train.departureTime.Minutes + train.delayedBy);
            desTime.setSeconds(train.departureTime.Seconds);

            if (desTime >= currentTime && desTime <= tweleve) {
                const availableSeats = train.seatsAvailable.sleeper + train.seatsAvailable.AC;
                const ticketPrices = train.price;
          
                trainList.push({
                  trainName: train.trainName,
                  trainNumber: train.trainNumber,
                  departureTime: desTime,
                  seatsAvailable: availableSeats,
                  price: ticketPrices,
                });
              }
        }

        return trainList
    }

    fetchOne(id: string){
        const data = this.fetchData()
        const singleTrain = data.filter( item => item.trainNumber===id)
        return singleTrain
    }
}

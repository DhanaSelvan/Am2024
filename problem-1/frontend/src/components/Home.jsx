import { useEffect, useState } from "react";
import Header from "./Header";

const Home = () => {

    const [train, setTrain] = useState([]);

    const fetchData = async () => {
        try{
            const result = await fetch('http://localhost:3500/train')
            const jsonResult = await result.json()
            setTrain(jsonResult)
        } catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    // console.log(train)

    return (
        <>
        <main className="container-fulid">
            <Header />
            <section className="container">
                <h3 className="text-center my-3">All Trains List</h3>
                <div className="row d-flex justify-content-center mx-2">
                    {train.map((item,index)=>{
                        return(
                            <div className="col-lg-3 col-sm-12 card w-sm-75 m-2" key={index}>
                                <div className="card-body">
                                    <h5 className="card-title" key={item.trainName}>{item.trainName}</h5>
                                    <p key={item.trainNumber}>{item.trainNumber}</p>
                                    <p key={item.seatsAvailable}>{item.seatsAvailable}</p>
                                    <p key={item.price.sleeper}>{item.price.sleeper}</p>
                                    <p key={item.price.AC}>{item.price.AC}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
        </>
    )
}

export default Home;
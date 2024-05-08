import { useEffect, useState } from "react";
import Header from "./Header";
import { useFormik } from 'formik'
import * as yup from 'yup'

const Searchtrain = () => {

    const [trainNum, setTrain] = useState('')
    const [record, setRecord] = useState([])

    const formik = useFormik({
        initialValues:{
            TrainNum: ''
        },
        validationSchema: yup.object({
            TrainNum: yup.string()
        }),
        onSubmit:(data)=>{
            console.log(data.TrainNum)
            // setTrain(data.TrainNum)
            if(data.TrainNum !== ""){
                handleData(data.TrainNum)
            } else{
                setTrain([])
            }
        }
    })

    const handleData = async (trainvalue) => {
        try{
            const result = await fetch(`http://localhost:3500/train/${trainvalue}`)
            const jsonResult = await result.json();
            setRecord(jsonResult)
            console.log(jsonResult)
        } catch(err){
            console.log(err)
        }
    }

    // useEffect(()=>{
    //     handleData()
    // }, [])

    const searchPage= true;
    return (
        <>
            <main className="container-fluid">
                < Header searchPage={searchPage}/>
                <section className="container">
                    <h3 className="text-center my-3">Search a Train</h3>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <input type="text" 
                            name="TrainNum" 
                            placeholder="Enter the train number"
                            onChange={formik.handleChange}
                            value={formik.values.TrainNum}
                            className="rounded p-2"/>
                        <button className="btn mx-2 bg-success text-white ">Search</button>
                    </form>
                    <div className="row">
                        {record.map((item,index)=>{
                            return (
                                <div className="col-lg-3 col-12 m-3 card">  
                                    <div className="card-body" key={index}>
                                        <h5 key={index} className="card-title">{item.trainName}</h5>
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

export default Searchtrain;
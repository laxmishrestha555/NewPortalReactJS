import React, { useEffect, useState } from "react";
import { Card } from '../../Card/Card';
import axios from 'axios';
import './News.css'

export function News(props) {

    const[datas, setDatas]= useState([])

    const getApi= async()=>{
        try {
            const response= await axios.get(`https://gnews.io/api/v4/top-headlines?category=technology&lang=en&apikey=${import.meta.env.VITE_APIKEY}`);
            console.log(response.data.articles);
            setDatas(response.data.articles)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getApi()
    }, [])
    
    

    return (
        <div className="allcards">
            {datas.map((data)=>(
                <div>
                <Card  data={data}/>
            </div>
            ))}
        </div>
    )
}

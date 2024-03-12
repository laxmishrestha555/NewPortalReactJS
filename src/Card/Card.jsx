import React from 'react'
import './Card.css'

export function Card({data}) {

    
    
    const handleUrlClick=()=>{
        window.open(data.url,'_blank')
    }

    return (
        <div className='container'>
          <div className="card">
            <h1>{data.title}</h1>
            <img src={data.image} alt="" />
            <h4>{data.description}</h4>
            <h4 onClick={handleUrlClick} style={{cursor:'pointer', color: 'black', textDecoration: 'underline'}}>{data.url}</h4>
            <p>{data.content}</p>

            </div>  
        </div>
    )
}

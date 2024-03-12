import React, {useState} from 'react';
import './ContactUs.css'

export function ContactUs(props) {

    const[name, setName]= useState('')
    const[email, setEmail]= useState('')
    const[message, setMessage]= useState('')

    const handleOnClick=()=>{
        console.log(name,email,message
        );
    }

    

    return (
        <div className="wrapper">
        <div className='container'>


            <div className="left">
                <h2>Contact Info</h2> <br/>
                <p>Please contact us here for any queries or problems.</p> <br/> 
                <p>Kindly fill the form for further process.</p> <br/>

            </div>



            <div className="right">

            <div className="form">
                <h2>Send Us Messages</h2>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='' id='name' onChange={(e)=>setName(e.target.value)} value={name} /> 

                <label htmlFor="">Email</label>
                <input type="email" placeholder='' id='email'  onChange={(e)=>setEmail(e.target.value)} value={email}/>


                <label htmlFor="">Messages</label>
                <textarea name="" id="messages" cols="30" rows="10"  onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>

                <button onClick={handleOnClick}>Send Messages</button>
                
            </div>

            </div>
        </div>

        </div>
    )
}

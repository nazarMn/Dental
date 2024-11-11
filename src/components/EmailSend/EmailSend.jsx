import React from 'react'
import './EmailSend.css'
import axios from 'axios'
import { useState } from 'react'

export default function EmailSend() {
    const [email, setEmail] = useState('');
    const sendMail = () => {
        axios.post('http://localhost:3000/send', {
            email
        }).then(res => {
            console.log(res)
            alert('Емеіл відправлено');
        })
    }
    return (
        <div className='emailSend'>
            <input required type="email" placeholder="Enter your email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={sendMail}>Subscribe</button>
        </div>
    )
}
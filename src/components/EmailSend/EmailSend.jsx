import React from 'react'
import './EmailSend.css'
import axios from 'axios'
import { useState } from 'react'

export default function EmailSend() {
    const [email, setEmail] = useState('');
    const sendMail = () => {
        axios.post('http://localhost:3000/send-email', { email })
          .then((res) => {
            console.log(res);
            alert('Email sent successfully');
          })
          .catch((err) => {
            console.error(err);
            alert('Failed to send email');
          });
      };
      
    return (
        <div className='emailSend'>
            <input required type="email" placeholder="Enter your email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={sendMail}>Subscribe</button>
        </div>
    )
}
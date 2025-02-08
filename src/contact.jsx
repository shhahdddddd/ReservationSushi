import React from 'react';
import { Link } from 'react-router-dom'; 
import './contact.css';  

function Contact() {
  return (
    <form action="post">
    <div>
    <img src="public/Screenshot 2025-01-16 214503.png"></img>
    </div>
    <p>U can contact us to set ur review also u can call us by this number :+21692856965 </p>
    <textarea name="review"></textarea>
    <button type="submit">Send</button>
   </form>
  );
}

export default Contact;

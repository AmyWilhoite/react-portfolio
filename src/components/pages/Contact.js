import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/style.css';


export default function Contact() {


  //function to send form to email using emailjs
       const sendEmail = (e) => {
          e.preventDefault()

          emailjs
            .sendContact(
              'service_xk827nm',
              'template_jplqmqn',
              Contact.current,
              '04Y64AFKKerBO9-W8'
            )
            .then(
              () => {
                alert('Thank you! Your message has been sent!')
                window.location.reload(false)
              },
              () => {
                alert('Failed to send the message, please try again')
              }
            )
        }  
        return(  

        <div className="padding">
          <h1>Contact Page</h1>
          <div className="container-fluid card row pt-4">
          <form>
              
              <div className="form-outline mb-4 border">
                <input type="text" id="form4Example1" className="form-control" />
                <label className="form-label" for="form4Example1">Your Name</label>
              </div>

              
              <div className="form-outline mb-4 border">
                <input type="email" id="form4Example2" className="form-control" />
                <label className="form-label" for="form4Example2">Your Email</label>
              </div>

              
              <div className="form-outline mb-4 border">
                <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                <label className="form-label" for="form4Example3">Send Me a Message</label>
              </div>

             
              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                <label className="form-check-label" for="form4Example4">
                  Send me a copy of this message
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
            </form>
        </div>
        </div>
      );
    }
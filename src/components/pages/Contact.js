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

        <div class="padding">
          <h1>Contact Page</h1>
          <p>
            Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
            molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
            magna a ultrices. Aenean pellentesque placerat lacus imperdiet
            efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
            mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
            posuere, eget tristique dui dapibus. Maecenas fermentum elementum
            faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
            ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
            dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
            rhoncus. Etiam vel condimentum magna, quis tempor nulla.
          </p>
        </div>
      );
    }
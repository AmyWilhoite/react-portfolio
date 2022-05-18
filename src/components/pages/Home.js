import React from 'react';
import '../styles/style.css';
import project1 from '../assets/logo192.png';

export default function Home() {
  return (
    <div class = "padding">
      <h1> About Me</h1>
      <div class= "card-deck">
      <div class="card m-4 cardheader">
          <img class="profile-pic" src= {project1} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Amy Wilhoite</h5>
            </div>
        </div>
          <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
  );
}

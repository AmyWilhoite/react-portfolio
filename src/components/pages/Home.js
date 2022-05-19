import React from 'react';
import '../styles/style.css';
import about from '../assets/amyGit.png';
import background from '../assets/amyGit.png';
import profileImg from '../assets/meReact.jpeg';

export default function Home() {
  return (
    <div class = "padding ">
      <h1> About Me</h1>
      <div class= "card-deck container-fluid row">
        <div class="card m-4 cardHeader col-3">
            <img class="rounded profile-pic img-responsive img-fluid" src= {profileImg} alt="Profile Image"></img>
              <div class="card-body">
                <h5 class="card-title text-center">Amy Wilhoite</h5>
              </div>
        </div>
        <div class ="card m-4 cardHeader col border-0">
                <img class="img-responsive rounded" src= {about} alt="Profile Image"></img>
        </div>
        <div style ={{
          backgroundImage: `url(${background})`}}>
        </div>
      </div>
    </div>

  );
}

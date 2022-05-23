import React from 'react';
import '../styles/style.css';
import about from '../assets/amyGit.png';
import background from '../assets/amyGit.png';
import profileImg from '../assets/meReact.jpeg';

export default function Home() {
  return (
    <div className = "padding ">
      <h1> About Me</h1>
      <div className= "card-deck container-fluid row">
        <div className="card m-4 cardHeader col-3">
            <img className="rounded profile-pic img-responsive img-fluid" src= {profileImg} alt="Profile Image"></img>
              <div className="card-body">
                <h5 className="card-title text-center">Amy Wilhoite</h5>
              </div>
        </div>
        <div className="card m-4 cardHeader col border-0">
                <img className="img-responsive rounded" src= {about} alt="Profile Image"></img>
        </div>
        <div style ={{
          backgroundImage: `url(${background})`}}>
        </div>
      </div>
    </div>

  );
}

import React from 'react';
import '../styles/style.css';
// import about from '../assets/amyGit.png';
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
        <div className="col mw-100 card m-4 cardHeader border-0 font-italic">
          <p>I'm a very ambitious excited learner who is currently exploring full stack software development. </p>
          <p>I have a knowledge of many industries, professional experience in business operations including finance, legal, compliance and processes. </p> 
          <p>I've worked extensively in product launch concept to completion and I also enjoy learning new technologies to help businesses grow.</p>
        </div>
      
      </div>
    </div>

  );
}

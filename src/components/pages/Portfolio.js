import React from 'react';
import '../styles/style.css';
import project1 from '../assets/logo192.png';


export default function About() {
  return (
    <div class= "padding">
      <h1>My Portfolio</h1>
      <div class="card-deck">
        <div class="card m-4 cardheader">
          <img class="card-img-top" src= {project1} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Project 1 Title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer">
              <small class="text-muted">Repository</small>
            </div>
        </div>
        <div class="card m-4 cardheader">
        <img class="card-img-top" src= {project1} alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">Project 1 Title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-footer">
            <small class="text-muted">Repository</small>
          </div>
      </div>
      <div class="card m-4 cardheader">
      <img class="card-img-top" src= {project1} alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Project 1 Title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer">
          <small class="text-muted">Repository</small>
        </div>
      </div>
      </div>
      <div class="card-deck">
        <div class="card m-4 cardheader">
          <img class="card-img-top" src= {project1} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Project 1 Title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer">
              <small class="text-muted">Repository</small>
            </div>
        </div>
        <div class="card m-4 cardheader">
        <img class="card-img-top" src= {project1} alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">Project 1 Title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-footer">
            <small class="text-muted">Repository</small>
          </div>
      </div>
      <div class="card m-4 cardheader">
      <img class="card-img-top" src= {project1} alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Project 1 Title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer">
          <small class="text-muted">Repository</small>
        </div>
      </div>
      </div>
    </div>
    
  );
}

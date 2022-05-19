import React from 'react';
import '../styles/style.css';
import project2 from '../assets/techBlog.png';
import project6 from '../assets/reddit.png';
import project3 from '../assets/notetaker1.png';
import project4 from '../assets/workday.png';
import project5 from '../assets/weather.png';
import project1 from '../assets/weather.png';


export default function About() {
  return (
    <div class= "padding">
      <h1>My Portfolio</h1>
      <div class="card-deck">
        <div class="card m-4 cardHeader">
          <img class="card-img-top" src= {project1} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">React Portfolio</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="https://tech-blog-78130.herokuapp.com/" class="btn btn-primary">React Portfolio</a>
            </div>
            <div class="card-footer">
              <small class="text-muted">Repository</small>
            </div>
        </div>
        <div class="card m-4 cardHeader">
        <img class="card-img-top" src= {project2} alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">Tech blog App</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="https://tech-blog-78130.herokuapp.com/" class="btn btn-primary">Tech Blog</a>
          </div>
          <div class="card-footer">
            <small class="text-muted">Repository</small>
          </div>
      </div>
      <div class="card m-4 cardHeader">
      <img class="card-img-top" src= {project3} alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Note Taker</h5>
          <p class="card-text">Deployed using Heroku: https://mysterious-sands-29258.herokuapp.com.</p>
          <a href="#" class="btn btn-primary">Note Taker App</a>
        </div>
        <div class="card-footer">
          <small class="text-muted">Repository: https://github.com/AmyWilhoite/note-taker.git</small>
        </div>
      </div>
      </div>
      <div class="card-deck">
        <div class="card m-4 cardHeader">
          <img class="card-img-top" src= {project4} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Work Day Scheduler</h5>
              <p class="card-text">Link: https://amywilhoite.github.io/05-Work-Day-Scheduler/ .</p>
              <a href="#" class="btn btn-primary">Work Day App</a>
            </div>
            <div class="card-footer">
              <small class="text-muted">Repository: https://github.com/AmyWilhoite/05-Work-Day-Scheduler.git</small>
            </div>
        </div>
        <div class="card m-4 cardHeader">
        <img class="card-img-top" src= {project5} alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">Weather App</h5>
            <p class="card-text">Link: https://amywilhoite.github.io/06-weather-dashboard/ .</p>
            <a href="#" class="btn btn-primary">Weather App</a>
          </div>
          <div class="card-footer">
            <small class="text-muted">Repository: https://github.com/AmyWilhoite/06-weather-dashboard.git</small>
          </div>
      </div>
      <div class="card m-4 cardHeader">
      <img class="card-img-top" src= {project6} alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Reddit Data Dive</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href="#" class="btn btn-primary">Reddit App</a>
        </div>
        <div class="card-footer">
          <small class="text-muted">Repository</small>
        </div>
      </div>
      </div>
    </div>
  );
}

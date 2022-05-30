import React from 'react';
import '../styles/style.css';
import project2 from '../assets/techBlog.png';
import project6 from '../assets/reddit.png';
import project3 from '../assets/notetaker1.png';
import project4 from '../assets/workday.png';
import project5 from '../assets/weather.png';
import project1 from '../assets/react-portfolio.png';
import { MDBIcon } from 'mdbreact';


export default function Portfolio() {
  return (
    <div className= "padding">
      <h1>My Portfolio</h1>
      <div className="card-deck">
        <div className="card m-4 cardHeader">
          <img className="card-img-top" src= {project1} alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">React Portfolio</h5>
              <p className="card-text">My react portfolio...a client side react application displaying my Georgia Tech projects.</p>
              <p>This app uses React, jsx, css, and mdb react.</p>
              <a href="https://amywilhoite.github.io/react-portfolio/" className="btn btn-primary">React App</a>
            </div>
            <div className="card-footer">
            <MDBIcon fab icon='github'/>
            <a href="https://github.com/AmyWilhoite/react-portfolio.git" className="small text-muted">   React App</a>
            </div>
        </div>
        <div className="card m-4 cardHeader">
        <img className="card-img-top" src= {project2} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Tech blog App</h5>
            <p className="card-text">A full-stack CMS style blog that allows you to log-in securely to be able to create and edit your blog posts.</p>
            <p>This app uses node and is deployed with heroku. </p>
            <a href="https://tech-blog-fun.herokuapp.com" className="btn btn-primary">Tech Blog</a>
          </div>
          <div className="card-footer">
            <MDBIcon fab icon='github'/>
            <a href="https://github.com/AmyWilhoite/tech-blog-78130.git" className ="small text-muted">   Tech Blog Repository</a>
          </div>
      </div>
      <div className="card m-4 cardHeader">
      <img className="card-img-top" src= {project3} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Note Taker</h5>
          <p className="card-text">Geared toward small business owners who want to be able to organize their thoughts and keep track of tasks.</p><p>This app uses node and is deployed with heroku.</p>
          <a href="https://mysterious-sands-29258.herokuapp.com/" className="btn btn-primary">Note Taker App</a>
        </div>
        <div className="card-footer">
          <MDBIcon fab icon='github'/>
          <a href="https://github.com/AmyWilhoite/note-taker.git" className ="small text-muted">   Note Taker Repository</a>
        </div>
      </div>
      </div>
      <div className="card-deck">
        <div className="card m-4 cardHeader">
          <img className="card-img-top" src= {project4} alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Work Day Scheduler</h5>
              <p className="card-text">Work Day Scheduler is a simple calendar application that allows you to save events by hour.</p><p>This app uses HTML, CSS, jQuery and is deployed with Github Pages.</p>
              <a href="https://amywilhoite.github.io/05-Work-Day-Scheduler/" className="btn btn-primary">Work Day App</a>
            </div>
            <div className="card-footer">
            <MDBIcon fab icon='github'/>
            <a href="https://github.com/AmyWilhoite/05-Work-Day-Scheduler.git" className ="small text-muted">    Work Day Repository</a>
            </div>
        </div>
        <div className="card m-4 cardHeader">
        <img className="card-img-top" src= {project5} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Weather App</h5>
            <p className="card-text">Weather app is an API dashboard that connects with open weather map to return data for certain cities based on user entries.</p>
            <p>This app dynamically updates HTML, CSS, and is deployed with Github Pages.</p>
            <a href="https://amywilhoite.github.io/06-weather-dashboard/" className="btn btn-primary">Weather App</a>
          </div>
          <div className="card-footer">
          <MDBIcon fab icon='github'/>
          <a href="https://github.com/AmyWilhoite/react-portfolio.git" className ="small text-muted">   Weather App Repository</a>
          </div>
      </div>
      <div className="card m-4 cardHeader">
      <img className="card-img-top" src= {project6} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Reddit Data Dive</h5>
          <p className="card-text">Search and retrieve top posts from reddit and explore more research on the topics using wikipedia.</p>
          <p>This app features technical use of third-party API's. Other tech used is HTML, CSS, bootstrap and is deployed with Github Pages.</p>
          <a href="https://amywilhoite.github.io/reddit-data-dive/" className="btn btn-primary">Reddit App</a>
        </div>
        <div className="card-footer">
        <MDBIcon fab icon='github'/>
        <a href="https://github.com/AmyWilhoite/reddit-data-dive.git" className ="small text-muted">   Reddit App Repository</a>
        </div>
      </div>
      </div>
    </div>
  );
}

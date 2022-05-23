import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/NewContact';
import { MDBIcon } from 'mdbreact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
      <div className ="bg-light p-5">
        <div className ="card-deck row">
          <div className="card bg-light border-0 col text-center">
              <div>
               <a href="mailto:amygitmail@gmail.com" className ="small text-muted">E-MAIL</a>
              </div>
          </div>
          <div className="card bg-light border-0 col text-center">
              <div>
              <a href="tel:+1-555-555-1212" className ="small text-muted">PHONE</a>
              </div>
          </div>
          <div className="card bg-light border-0 col text-center">
              <div>
              <a href="https://github.com/AmyWilhoite" className ="small text-muted">GITHUB</a>
              <MDBIcon fab icon='github' />
              </div>
          </div>
          <div className="card bg-light border-0 col text-center">
              <div>
              <a href="https://github.com/AmyWilhoite" className ="small text-muted">LINKEDIN</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

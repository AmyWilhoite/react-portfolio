import React from "react";
import "../styles/style.css";
import { MDBIcon } from "mdbreact";

export default function Resume() {
  return (
    <div className="padding">
      <div className="container-fluid">
        <h1>Professional</h1>
        <h3 className="mt-5">Experience</h3>
        <div className ="card-deck">
        <div className="col-8">
          <div className="card m-4 p-5">
            <h4>Director of Operations</h4>
            <p>Construction Ready, K12 Division</p>
            <ul>
              <li>
                Manage operations including reporting, personnel and processes
                associated with our team and educators in 187 programs across
                the state of Georgia.
              </li>
              <li>
                Reporting processes and activities associated with our team and
                goals to partners such as The Georgia Department of Education,
                The Marcus Family Foundation, The Home Depot Foundation and the
                Arthur Blank Foundation.
              </li>
              <li>
                Work with and develop technology solutions to manage team and
                organization metrics. Working with high level partners such as The Home Depot to integrate technology solutions. 
              </li>
            </ul>
          </div>
          <div className="card m-4 p-5">
            <h4>Business Operations, Corporate Compliance & Acquisitions</h4>
            <p> Natures Essentials, Supplement Warehouse and Hi-Tech Pharma</p>
            <ul>
              <li>Product Development & Commercialization & Brand Co-Owner for Nature's Essentials</li>
              <li>
                Key role in Purchasing, Manufacturing, Product Research & development & Marketing
              </li>
              <li>Amazon Store Owner, Manager</li>
              <li>
                Acquisitions Team & Corporate Compliance in 10 States for Supplement Warehouse, (18
                Stores){" "}
              </li>
              <li>
                Sales Tax Management, Payroll Compliance & Reporting to CEO & Management Team
              </li>
              <li>
                Comfortable collaborating accross Legal, Accounting and Executive Leadership
              </li>
            </ul>
          </div>
          <div className="card m-4 p-5">
            <h4>Director of Funding</h4>
            <p>Elevated Title formerly Liberty Title</p>
            <ul>
              <li>
               Management of corporate compliance under the supervision of an attorney for 20 states nationally
              </li>
              <li>
                Primary responsibility of 7 attorney trust accounts and appropriation of 20-50 million dollars/month on behalf of sellers, buyers, lenders and 3rd parties and report directly to CFO & President.
              </li>
              <li>
                Review & ensure contractual, title, lender documents have been met for proper appropriation of lender funds.
              </li>
              <li>Work with many parties in the transaction including lenders, attorneys, governmental and insurance agencies</li>
              <li>Analyzing, tracking and reporting incoming and going funds for real estate transactions. Proficient in generating reports using excel, balancing settlement statements for funding to ensure as many as hundreds of loans per day are funded appropriately</li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div>
            <div className="card m-4 p-5">
              <h3>Skills</h3>
              <p>Proficient in G-Suite, google sheets, Office including Excel, Quickbooks and other accounting software, Adobe Creative Suite including photoshop and Illusatrator, Full-Stack Technologies and much more:</p>
                <i class="fab fa-cpanel fa-3x"></i>
                <i class="fab fa-git fa-3x"></i>
                <i class="fab fa-hubspot fa-3x"></i>
                <i class="fab fa-js-square fa-3x"></i>
                <i class="fab fa-node fa-3x"></i>
                <i class="fab fa-npm fa-3x"></i>
                <i class="fab fa-react fa-3x"></i>
                <i class="fab fa-mdb fa-3x"></i>
            </div>
            <div className ="card m-4 p-5">
              <h3>Education</h3>
              <h4 className= "mt-4">Georgia Tech Extension</h4>
              <p>
                Full-Stack Technology Certificate form Georgia Institute of
                Technology - 2022
              </p>
              <h4 className="mt-4">Georgia State University</h4>
              <p>Bachelors of Business Administration 2005</p>
              <h4 className="mt-4">Licensed Real Property Broker</h4>
              <p>Georgia Real Estate Commission</p>
              <p>Agent 2004, Broker 2010</p>
            </div>
          </div>
          </div>
        </div>
        <div className="card-deck">
            <div className="card m-4 p-4 text-center">
              <i class="fas fa-file-download fa-3x"></i>
              <a
                href="https://www.dropbox.com/s/fnue7rpveqijanc/Amy%20Wilhoite%20Resume-Operations.pdf?dl=0"
                download
              >
                Download Resume'
              </a>
            </div>
            </div>
      </div>
    </div>
  );
}

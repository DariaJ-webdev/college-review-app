import React from 'react';
import '../styles/welcome.css';
import stepsToKnow from '../assets/undraw_stepsToKnow.svg';

function Welcome() {
  return (
    <><h1 className="pageintro">Your Score...Your Future</h1>
    <section className="welcome-container">   
        <div className="welcome-left">
        <h2 className="title-purpose">ACT / SAT College Search</h2>
            <p className="how-to">
            <span className="font-bold">Ready to step up and see which colleges are within your reach?</span> Find out in seconds with this college search that lets you filter through colleges you're considering, and quickly see ACT/SAT test scores from their latest admissions. <br/>
              <br />
            You can also refine your search by location and the field you want
            to study. The data comes from
              <a
                href="https://collegescorecard.ed.gov"
                target="_blank"
                className="govlink"
              >
                {" "}
                collegescorecard.ed.gov
              </a>
              , a trusted source.
            </p>
      </div>
      <div className="welcome-right">
        <img src={stepsToKnow} alt="journey to knowledge" className="stepsToKnow" />
          </div>
    </section>
    </>
  );
}

export default Welcome;

 
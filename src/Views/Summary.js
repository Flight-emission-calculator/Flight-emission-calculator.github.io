import React, {useState, useEffect} from 'react';
import "../css/Summary.css";
import {Link} from 'react-router-dom';
import unlit from '../images/unlit_bulb.jpg';
import lit from '../images/lit_bulb.jpg';
import BarChart from '../Components/BarChart';
import plastic_recycle from '../images/plastic.png';


function Summary({ match }) {

  const carbon_budget = 2000;
  const budget_percent = Math.round((match.params.emissions/carbon_budget * 100) * 100) / 100;
  const average_electricity_consuption = 1800;
  const electricity_percent = Math.round((match.params.emissions/average_electricity_consuption * 100) * 100) / 100;
  
  const months_used = Math.round(12*electricity_percent*0.01);
  let years_used = Math.round(months_used/12);
  let months_left = 12-months_used;
  if (months_left < 0) {
    months_left = 0;
  }
  const recycled_plastic = Math.round((match.params.emissions/1.5) * 100) / 100;
  const number_years = Math.round(recycled_plastic/8);

  function return_BarCharts() {
    if (budget_percent > 100) {
        console.log("Hello over budget");
        const over_budget = budget_percent - 100;
        return ( 
        <div className="carbon-chart">
          <BarChart percent={budget_percent}></BarChart>
        </div>
      ); 
    }
    else {
        return (
            <div className="carbon-chart">
              <BarChart percent={budget_percent}></BarChart>
            </div>
        );    
    }
  }

  return (
    <div className="start">
        <h1>Summary</h1>
        <div className="start-subheading">
          <p>An air trip from {match.params.from} to {match.params.destination} corresponds to a corbon emission of {match.params.emissions}kg</p>
        </div>

        <div className="summary-container">

          <div className="summary-box" id="comparison1">
            <h3>Carbon Budget</h3>
            <p>{budget_percent}% of your individual carbon budget for a whole year</p>
            {return_BarCharts()}
          </div>

          <div className="summary-box" id="comparison2">
            <h3>Household Electricity</h3>
            <p>{electricity_percent}% of a household´s electricity consumption for a whole year</p>
           
            <img src={unlit} className="bulb" alt="Unlit bulb"/>
            <p>Live without electricity for {months_used} months</p>

            <img src={lit} className="bulb" alt="Lit bulb"/>
            <p>Live with electricity for {months_left} months</p>

          </div>

          <div className="summary-box" id="comparison3">
            <h3>Plastic Recycle</h3>
            <p>Recycle {recycled_plastic} kg plastic to reduce the same amount of CO2 that this air trip emits</p>
            <p style={{ marginTop: '5em', fontWeight: 'bold'}}>{recycled_plastic} kg plastic</p>
            <img src={plastic_recycle} className="recycling_bin-summary" alt="Plastic recycling bin" />
            <p style={{ marginTop: '2em'}}>Plastic recycling for {number_years} years</p>
          </div>
        </div>

{/*         <div className="take-away-container">
          <div className="take-away">
              <h3>Take away:</h3>
              <p>Flying has a huge impact on your individual carbon footprint and takes up a huge part of you individual carbon budget.</p>
          </div>

          <div className="take-away">
              <h4>Take away:</h4>
              <p>Would you still take that flight if it meant spending months without electricity?</p>
          </div>

          <div className="take-away">
              <h4>Take away:</h4>
              <p>Recycling plastic cannot in the right scale compensate for a flight.</p>
          </div>

        </div> */}

        <h1>Noteworthy</h1>
        <ul className="take-away-list">
          <li>Flying has a huge impact on your individual carbon footprint and takes up a massive part of you individual carbon budget.</li>
          <li>Would you still take that flight if it meant spending months without electricity?</li>
          <li>Recycling plastic cannot in the right scale compensate for a flight.</li>
        </ul> 

        <div className="footer"></div>

{/*         <Link to={"/"}>
            <button className="btn">Calculate new trip</button>
        </Link> */}

        <div className="next-btn">
          <Link to={"/info"} style={{ textDecoration: 'none'}} className="more-info">
            <button className="btn">More info</button>
          </Link>
        </div>
    </div>
  );
}

export default Summary;
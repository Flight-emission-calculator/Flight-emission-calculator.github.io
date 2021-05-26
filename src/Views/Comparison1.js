import React, {useState, useEffect} from 'react';
import '../css/Comparison1.css';
import {Link} from 'react-router-dom';
import haversine from 'haversine-distance';
import BarChart from '../Components/BarChart';
import infoLogo from '../images/information-logotype.png';
import calender_img0 from '../images/calender_budget/0.png';
import calender_img1 from '../images/calender_budget/1.png';
import calender_img2 from '../images/calender_budget/2.png';
import calender_img3 from '../images/calender_budget/3.png';
import calender_img4 from '../images/calender_budget/4.png';
import calender_img5 from '../images/calender_budget/5.png';
import calender_img6 from '../images/calender_budget/6.png';
import calender_img7 from '../images/calender_budget/7.png';
import calender_img8 from '../images/calender_budget/8.png';
import calender_img9 from '../images/calender_budget/9.png';
import calender_img10 from '../images/calender_budget/10.png';
import calender_img11 from '../images/calender_budget/11.png';
import calender_img12 from '../images/calender_budget/12.png';
var json = require('../airports.json'); 

function Comparison1({ match }) {

  let fly_from = match.params.from.toLowerCase();
  fly_from = fly_from.charAt(0).toUpperCase() + fly_from.slice(1);
  let fly_to = match.params.destination.toLowerCase();
  fly_to = fly_to.charAt(0).toUpperCase() + fly_to.slice(1);

  console.log(fly_from);
  console.log(fly_to);

  for (var i = 0; i < json.length; i++){
    //console.log(json[i]);
    if (json[i].city == match.params.from){
      //console.log(json[i].airport_name);
    }
  }

  function get_longLat_from() {
    for(i in json) {
      if (json[i].airport_name == match.params.from){
        let from_latitude = json[i].lat_dec_deg;
        let from_longitude = json[i].long_dec_deg;
        const from_long_lat = { latitude: from_latitude, longitude: from_longitude }
        return from_long_lat;
       }
    }
  }

  function get_longLat_to() {
    for(i in json) {
      if (json[i].airport_name == match.params.destination){
        let to_latitude = json[i].lat_dec_deg;
        let to_longitude = json[i].long_dec_deg;
        const to_long_lat = { latitude: to_latitude, longitude: to_longitude }
        return to_long_lat;
       }
    }
  }

  function calculate_distance(from_long_lat, to_long_lat) {
    //haversine calculates distance in m, therefore multiply with 0.001 to get km
    const dist = haversine(from_long_lat, to_long_lat) * 0.001;
    console.log(dist);
    if (match.params.roundTrip == "true") {
      return dist*2;    
    }
    else {
        return dist;    
    }
  }

  const total_distance = calculate_distance(get_longLat_from(), get_longLat_to());
  const carbon_emission = Math.round((0.133 * total_distance) * 100) / 100;
  const carbon_budget = 2000;
  const budget_percent = Math.round((carbon_emission/carbon_budget * 100) * 100) / 100;
  
  const months_used = Math.round(12*budget_percent*0.01);
  const months_left = 12-months_used;

  function return_BarCharts() {
    if (budget_percent > 100) {
      const over_budget = Math.round((budget_percent - 100) * 100) / 100;
        return (
          <div className="chart-div">
              <div className="info-box">    
                  <div className="tooltip">
                  <img src={infoLogo} className="info-logotype" alt="info-logo"/>
                    <span className="tooltiptext">
                        <p className="tooltiptext-text">This air trip corresponds to a carbon emission of {carbon_emission} kg</p>
                    </span>
                  </div>        
                  <p>An air trip from {fly_from} to {fly_to} equals {budget_percent}% of your individual carbon budget for a whole year</p>
                  <p>That means you would go {over_budget}% over your CO2 budget that you have for 1 year</p>
              </div>
              
              <div className="chart">
                <BarChart percent={budget_percent}></BarChart>
              </div>
          </div>

      ); 
    }
    else {
        return (
          <div className="chart-div">
              <div className="info-box">    
                  <div className="tooltip">
                    <img src={infoLogo} className="info-logotype" alt="info-logo"/>
                    <span className="tooltiptext">
                        <p className="tooltiptext-text">This air trip corresponds to a carbon emission of {carbon_emission} kg</p>
                    </span>
                  </div>        
                  <p>An air trip from {fly_from} to {fly_to} equals {budget_percent}% of your individual carbon budget for a whole year</p>
              </div>

            <div className="chart">
              <BarChart percent={budget_percent}></BarChart>
            </div>
          </div>

        );    
    }
  }

  function get_calender_img() {
    if (months_left == 0) {
        const calender_img = calender_img0;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />

            </div>
        );
    } else if (months_left == 1) {
        const calender_img = calender_img1;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
            </div>
        ); 
    } else if (months_left == 2) {
        const calender_img = calender_img2;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
            </div>
        ); 
    } else if (months_left == 3) {
        const calender_img = calender_img3;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
            </div>
        ); 
    } else if (months_left == 4) {
        const calender_img = calender_img4;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
            </div>
        ); 
    } else if (months_left == 5) {
        const calender_img = calender_img5;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
            </div>
        ); 
    } else if (months_left == 6) {
        const calender_img = calender_img6;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
            </div>
        ); 
    } else if (months_left == 7) {
        const calender_img = calender_img7;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
            </div>
        ); 
    } else if (months_left == 8) {
        const calender_img = calender_img8;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
            </div>
        ); 
    } else if (months_left == 9) {
        const calender_img = calender_img9;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
            </div>
        ); 
    } else if (months_left == 10) {
        const calender_img = calender_img10;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
            </div>
        ); 
    } else if (months_left == 11) {
        const calender_img = calender_img11;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
            </div>
        ); 
    } else if (months_left == 12){
        const calender_img = calender_img12;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
            </div>
        ); 
    }
    else if (months_left < 0){
        const calender_img = calender_img0;
        return (
            <div className="calender">
              <img src={calender_img} className="calender-img" alt="calender" />
              <p></p>
            </div>
        ); 
    }
  }

  function displayCalenderComparison() {
    if (budget_percent > 100) {
      const years_used = Math.round(months_used/12);

      return(
        <div className="calender-wrap">
          <p className="calender-wrap--first-p">This means that you have used up your carbon budget for the next {months_used} months</p>
          <p style={{ fontSize: '18pt', fontWeight: 'bold'}}>That equals your budget for almost {years_used} whole years</p>
        </div>
      );
    } else {
      return(
        <div className="calender-wrap">
          <p className="calender-wrap--first-p">This means that you have used up your carbon budget for {months_used} months of the next year</p>
          {get_calender_img()}
          <p className="calender-wrap--second-p">That leaves {months_left} months of a year</p>
        </div>
      );

    }
  }


  return (
    <div className="start">

        <h1>Carbon Budget</h1>
        <div className="start-subheading">
            <div className="tooltip">
              <img src={infoLogo} className="info-logotype" alt="info-logo"/>
              <span className="tooltiptext">
                  <p className="tooltiptext-title">Your individual carbon budget</p>
                  <p className="tooltiptext-text">According to the IPCC report, 
                      emissions must not exceed 2 tonnes per capita per year, 
                      to achieve the goals set out in the Paris Agreement.</p>
                  <p className="tooltiptext-text">This is why we say that your individual carbon budget for 1 year is equal to 2000 kg.</p>
              </span>
            </div>

            
            <p>To achieve the goals set out in the Paris Agreement, <br/>you have a personal individual carbon budget of 2 000 kg per year</p>
        {/* <p className="start-subheading">An air trip from {match.params.from} to {match.params.destination} corresponds to a carbon emission of {carbon_emission} kg</p> */}
        </div>

         {return_BarCharts()}

          {displayCalenderComparison()}

        <div className="next-btn">
            <Link to={`/${fly_from}/${fly_to}/${match.params.roundTrip}/${carbon_emission}/household`}>
                <button className="btn">Next</button>
            </Link>
        </div>

    </div>
  );
}

export default Comparison1;
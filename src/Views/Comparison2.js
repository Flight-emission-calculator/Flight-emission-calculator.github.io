import React, {useState, useEffect} from 'react';
import "../css/Comparison2.css";
import {Link} from 'react-router-dom';
import infoLogo from '../images/information-logotype.png';
import home from '../images/home-page.png';
import calender_img0 from '../images/calender_electricity/0.png';
import calender_img1 from '../images/calender_electricity/1.png';
import calender_img2 from '../images/calender_electricity/2.png';
import calender_img3 from '../images/calender_electricity/3.png';
import calender_img4 from '../images/calender_electricity/4.png';
import calender_img5 from '../images/calender_electricity/5.png';
import calender_img6 from '../images/calender_electricity/6.png';
import calender_img7 from '../images/calender_electricity/7.png';
import calender_img8 from '../images/calender_electricity/8.png';
import calender_img9 from '../images/calender_electricity/9.png';
import calender_img10 from '../images/calender_electricity/10.png';
import calender_img11 from '../images/calender_electricity/11.png';
import calender_img12 from '../images/calender_electricity/12.png';

function Comparison2({ match }) {

  const average_electricity_consuption = 1800;
  const electricity_percent = Math.round((match.params.emissions/average_electricity_consuption * 100) * 100) / 100;
  let number_of_houses = Math.round((match.params.emissions/average_electricity_consuption) * 100) / 100;
  
  const months_used = Math.round(12*electricity_percent*0.01);
  const months_left = 12-months_used;

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

/*   function render_houses() {
    console.log(number_of_houses);
    let count_houses = 0;

      while (number_of_houses =! 0) {
        console.log(number_of_houses);
        number_of_houses -= 1;
        count_houses += 1;
      }
      console.log(count_houses);

  } */

  function displayCalenderComparison() {
    if (electricity_percent > 100) {
      const years_used = Math.round(months_used/12);
      return(
        <div className="calender-wrap-div-container">
            {/* <div className="calender-wrap--first-p"> */}
            <div className="calender-wrap-div"  style={{ marginRight: '2em'}}>
                <p style={{ maxWidth: '800px'}}>A household would live without electricity for the next {months_used} months (almost {years_used} whole years)</p>
                {/* <p style={{ fontSize: '18pt', fontWeight: 'bold'}}>Which equals almost {years_used} whole years</p> */}
            </div>
            <div className="calender-wrap-div">
                <p>Or {number_of_houses} households would live without electricity for 1 year</p>
            </div>
        </div>
      );
    } else {
      return(

        <div className="calender-wrap">
            <p className="calender-wrap--first-p">This means that you would leave a household without electricity for {months_used} months of the year</p>
            {get_calender_img()}
            <p className="calender-wrap--second-p">That leaves {months_left} months that a household would have electricity</p>
        </div>
      );

    }
  }

  return (
    <div>
        <h1>Household Electricity</h1>
        <div className="start-subheading">
        {/* <p>An air trip from {match.params.from} to {match.params.destination} corresponds to an emission of {match.params.emissions} kg CO2</p> */}
        <p>An air trip from {match.params.from} to {match.params.destination} corresponds to an emission of {match.params.emissions} kg CO2. </p>

            <div className="tooltip">
            <img src={infoLogo} className="info-logotype" alt="info-logo"/>
            <span className="tooltiptext">
                    <p className="tooltiptext-title">A household’s consumption of electricity for a whole year</p>
                    <p className="tooltiptext-text">In Sweden, a normal energy consumption for a villa is about 20,000 kWh/year.</p>
                    <p className="tooltiptext-text">This is equal to 1800 kg CO2.</p>
                </span>
            </div>
            
            <p>That is equal to {electricity_percent}% of a household´s electricity consumption for a whole year</p>
        </div>



{/*         <div className="start-subheading">
            <p>An air trip from {match.params.from} to {match.params.destination} corresponds to an emission of {match.params.emissions} kg CO2</p>

        </div>

        <div className="info-box">            
            <div className="tooltip">
                <img src={infoLogo} className="info-logotype" alt="info-logo"/>
                <span className="tooltiptext">
                    <p className="tooltiptext-title">A household’s consumption of electricity for a whole year</p>
                    <p className="tooltiptext-text">In Sweden, a normal energy consumption for a villa is about 20,000 kWh/year.</p>
                    <p className="tooltiptext-text">This is equal to 1800 kg CO2.</p>
                </span>
            </div>
            
            <p>This equals {electricity_percent}% of a household´s electricity consumption for a whole year</p>

        </div> */}
        
{/*         <div className="calender-wrap">
            <p className="calender-wrap--first-p">This means that you would have used up the electricity for {months_used} months of the next year</p>
            {get_calender_img()}
            <p className="calender-wrap--second-p">That leaves {months_left} months you can live with electricity</p>
        </div> */}
        {displayCalenderComparison()}


        <div className="next-btn">
            <Link to={`/${match.params.from}/${match.params.destination}/${match.params.roundTrip}/${match.params.emissions}/plastic-recycle`}>
                <button className="btn">Next</button>
            </Link>
        </div>
    </div>
  );
}

export default Comparison2;
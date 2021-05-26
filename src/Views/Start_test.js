import React, {useState, useEffect} from 'react';
import "../css/Start.css";
import {Link} from 'react-router-dom';
var json = require('../airports.json'); 

function Start() {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [roundTrip, setRoundTrip] = useState(false);
  const [matches_from, setMatchesFrom] = useState([]);
  const [matches_to, setMatchesTo] = useState([]);
  const [suggestionsFromVisible, setFromVisible] = useState(true);

  
  //const data = [Object.values(json)];
  //console.log(json);
  //console.log(Object.values(json).filter(user => user.airport_name === 'ARLANDA'));

  function onCheckboxChange() {
    if (roundTrip === 'true') {
      console.log("It was checked, now unchecking");
      setRoundTrip(false);
    } else {
      console.log("It was unchecked, now checked");
      setRoundTrip(true);
    }
  }

  //search json file and filter it
   const searchFrom = async searchText => {
    setFrom(searchText);
    //get match to text input
    let matches = Object.values(json).filter(airport => {
      const regex = new RegExp(`^${searchText.toUpperCase()}`, 'g');
      return airport.airport_name.match(regex) || airport.city.match(regex);
    });

    if (searchText.length == 0) {
      matches = [];
    }
    setMatchesFrom(matches);
  }

  const showsearchFromResult = matches => {
    if (matches.length > 0) {
      const html = matches.map( (match) => `
        ${match.airport_name} (${match.city})
      `
      );
      return (
        <div className="impacters">
          {html.map (i =>(
            <div key={i}>
                <p>{i}</p>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>{''}</div>
      );
    }
  }

  const searchFrom_testing = async searchText => {
    setFrom(searchText);
    //get match to text input
    let matches = Object.values(json).filter(airport => {
      const regex = new RegExp(`^${searchText.toUpperCase()}`, 'g');
      return airport.airport_name.match(regex) || airport.city.match(regex);
    });

    if (searchText.length == 0) {
      matches = [];
    }
    setMatchesFrom(matches);
  }

  const showsearchFromResult_testing = matches => {
    if (matches.length > 0) {
      const suggestions = matches.map( (match) => 
        <li onClick={() => {setFromVisible(false); setFrom(match.airport_name);}}>
            {match.airport_name} ({match.city})
        </li>
      );
      return (
        <div>
          {suggestionsFromVisible === true &&
          suggestions.map (i =>(
            <div key={i}>
                {i}
            </div>
          ))
          }
        </div>
      );
    } else {
      return (
        <div>{''}</div>
      );
    }
  }

  function onSuggestionFromClick() {
    //console.log(airport);
    //setFrom(airport);
    //var elements = document.getElementsByClassName("autocom-box");
    console.log("I'm here");
    return (
      <div>{''}</div>
    );
  }

  const searchDestination = async searchText => {
    setDestination(searchText);
    //get match to text input
    let matches = Object.values(json).filter(airport => {
      const regex = new RegExp(`^${searchText.toUpperCase()}`, 'g');
      return airport.airport_name.match(regex) || airport.city.match(regex);
    });

    if (searchText.length == 0) {
      matches = [];
    }
    setMatchesTo(matches);
  }

  const showsearchDestinationResult = matches => {
    if (matches.length > 0) {
      const html = matches.map( (match) =>  `
      ${match.airport_name} (${match.city})
    `
      );
      return (
        <div className="impacters">
          {html.map (i =>(
            <div key={i}>
                <p>{i.charAt(0).toUpperCase()}</p>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>{''}</div>
      );
    }
  }

  return (
    <div className="start">
        {/* <h1>Flight emission calculator</h1> */}
        <p className="intro-title ">Calculate carbon emissions for air trip:</p>

        <div className="data-input">
{/*             <div className="data-input-fields">
              From: <input id="fromInput" type="text" placeholder="Enter city or airport..." required={true} value={from} onChange={(e) => {searchFrom(e.target.value)}}/>
              <div>{showsearchFromResult(matches_from)}</div>
            </div>

            <div className="data-input-fields">
              To: <input id="toInput" type="text" placeholder="Enter city or airport..." required={true} value={destination} onChange={(e) => {searchDestination(e.target.value)}}/>
              <div>{showsearchDestinationResult(matches_to)}</div>
            </div>

            <div className="data-input-fields">
              Roundtrip: <input type="checkbox" onChange={(e) => {onCheckboxChange()}}/>
            </div> */}
        </div>

        <div className="wrapper">
            <div className="search-input">
              From: <input id="fromInput" type="text" placeholder="Enter city or airport..." required={true} value={from} onChange={(e) => {searchFrom_testing(e.target.value)}}/>
              <div className="autocom-box">
                {showsearchFromResult_testing(matches_from)}
                {/* <li>Malta</li>
                <li>Malta</li>
                <li>Malta</li>
                <li>Malta</li> */}

              </div>
            </div>

{/*             <div className="search-input">
              To: <input id="toInput" type="text" placeholder="Enter city or airport..." required={true} value={destination} onChange={(e) => {searchDestination(e.target.value)}}/>
              <div>{showsearchDestinationResult(matches_to)}</div>
            </div> */}

        </div>

        <Link to={`/${from}/${destination}/${roundTrip}`}>
            <button className="btn" >Calculate</button>
        </Link>
    </div>
  );
}

export default Start;
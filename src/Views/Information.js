import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../css/Information.css'
import Information1 from '../Components/Information1';
import Information2 from '../Components/Information2';
import Information3 from '../Components/Information3';
import arrowDown from '../images/chevron-down2.png';

function Information() {
  const [info1, setInfo1] = useState(false);
  const [info2, setInfo2] = useState(false);
  const [info3, setInfo3] = useState(false);

function changeOnClick (info, setInfo) {
  if (info == true) {
    setInfo(false);
  } else {
    setInfo(true);
  }
}

  return (
    <div className="start">
        <h1>Get more informaiton about</h1>
        <ul className="info-categories">

            <li onClick={() => changeOnClick(info1, setInfo1)}>The estimates and the calculations
              <img src={arrowDown} className="arrow-down" alt="arrow-down" onClick={() => changeOnClick(info1, setInfo1)}/>
            </li>
              {info1 === true && <Information1></Information1>}
           
            <li onClick={() => changeOnClick(info2, setInfo2)}>The Paris agreement and the IPCC
              <img src={arrowDown} className="arrow-down" alt="arrow-down" onClick={() => changeOnClick(info2, setInfo2)}/>
            </li>
              {info2 === true && <Information2></Information2>}

            <li onClick={() => changeOnClick(info3, setInfo3)}>Guidlines on how to travel without flying
              <img src={arrowDown} className="arrow-down" alt="arrow-down" onClick={() => changeOnClick(info3, setInfo3)}/>
            </li>
              {info3 === true && <Information3></Information3>}

        </ul> 
    </div>
  );
}

export default Information;
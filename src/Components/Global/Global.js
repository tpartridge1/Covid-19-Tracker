import React from 'react';
import './Global.css';

//Child Component
const Global = ({country, cases, deaths}) => {
  return (
   <div className='gb'>
     <p>Country: {country} </p>
     <p>Cases: {cases} </p>
     <p>Deaths: {deaths} </p>
   </div>
  );
}

export default Global;
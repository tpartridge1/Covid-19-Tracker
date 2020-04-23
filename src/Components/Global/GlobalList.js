import React from 'react';
import Global from './Global';

//parent component
//pure(dumb) component
const GlobalList = ({ globstats }) => {  
  return (
   <div>
	{
      globstats.map((list, i) => {
        return (
         <Global 
          key={i} 
          country={globstats[i].country}
          cases={globstats[i].cases}
          deaths={globstats[i].deaths} 
        />
       );
     })   	
	}
   </div> 
  );
}

export default GlobalList;
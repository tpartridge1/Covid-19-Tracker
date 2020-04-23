import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
	
	return (
	 <div className="topnav">
	   <a className="active" href="#home">Home</a>
	   <a href="#countries">Countries</a>
	   <a href="#about">About</a>
	   <input type='search' placeholder='Search Country' onChange={searchChange}/>
    </div>
  );
}



export default SearchBox;

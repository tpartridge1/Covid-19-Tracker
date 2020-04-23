import React, {Component} from 'react';
import SearchBox from  './Components/Navigation/SearchBox';
import GlobalList from './Components/Global/GlobalList';
import Logo from './Components/Logo/Logo';
import './Components/Navigation/Navigation.css';
import './App.css';




//smart component
class App extends Component {
  constructor() {
    super()
    this.state = {
     globstats: [],
     searchfield: ''
    }
  }



componentDidMount() {
  fetch("https://corona.lmao.ninja/v2/countries")
    .then(response => {
      return response.json();
    })
    .then(countries => {
      this.setState({globstats: countries})
  });
}



onSearchChange = (event) => {
  this.setState({searchfield: event.target.value})  
}



  render() {
    const filteredGlobstats = this.state.globstats.filter(globstats => {
      return globstats.country.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return ( 
      <div className='App'>
        <SearchBox searchChange={this.onSearchChange}/>
          <header>
           <h1>Global Covid-19 Virus Tracker</h1>
            <h2>By Country</h2>
          </header>
        <Logo /> 
        <GlobalList globstats={filteredGlobstats}/>
        <footer>Website by tpartridge&copy;2020</footer>
     </div>
    );
  }
}

export default App;






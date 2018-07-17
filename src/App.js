import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  getDBServer() {
    return "http://localhost:3001";
  }

  componentDidMount() {
    let url = this.getDBServer() + "/locations";
    console.log("fetching " + url);
    fetch(url).then((response) => {
      response.json().then((data) => {
        console.log("state from componentDidMount: " + this.state);
        console.log("rows from componentDidMount: " + JSON.stringify(data));
        this.setState({rows: data.map(x => x.name)});
      }).catch(function(error) {
        console.log("ERROR in fetch parse " + error);
      });
    }).catch(function(error) {
      console.log("ERROR in fetch" + error);
    });
  }

  render() {

    console.log("state from render: " + this.state);
    console.log("rows from render: " + JSON.stringify(this.state.rows));

    let listItems = this.state.rows.map(loc => <li key={loc}>{loc}</li>);
    return (
        <p className="Locations">
          {listItems}
        </p>
    );
  }
}

export default App;

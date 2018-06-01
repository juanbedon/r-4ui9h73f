import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor() {
		super();
		this.word = this.word.bind(this);
		this.state = { word: "" }
	}

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.word}/>
        <p className="repeater">{this.state.word}</p>
      </div>
    );
  }

  word(e) {
  	this.setState({
  		word: e.target.value
  	});
  }
}

export default App;

import React, { Component } from 'react';
import Header from "./header/Header";
import Events from "containers/events/Events";
import './App.scss';

export default class App extends Component {
	render() {

		return (
		  <div className="app">
        <Header />
			  <Events />
      </div>
		)
	}
}

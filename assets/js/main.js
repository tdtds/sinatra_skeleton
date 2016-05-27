/*
 * main.jsx
 *
 * Copyright (C) 2015 by TADA Tadash <t@tdtds.jp>
 * You can modify and/or distribute this under GPL.
 */
import * as React from 'react';
import {Flux, Component} from 'flumpt';
import {render} from 'react-dom';
import jQuery from 'jquery';

require('../css/main.css');

jQuery.ajaxSetup({
	beforeSend: function(xhr) {
		var token = jQuery('meta[name="_csrf"]').attr('content');
		xhr.setRequestHeader('X_CSRF_TOKEN', token);
	}
});

class MyComponent extends Component {
	componentDidMount() {
		this.dispatch('increment');
	}
	render() {
		return(
			<div>
				{this.props.count}
				<button onClick={() => this.dispatch('increment')}>++</button>
			</div>
		);
	}
}

class App extends Flux {
	subscribe() {
		this.on('increment', () => {
			this.update(({count}) => {
				return {count: count + 1};
			});
		});
	}
	render(state) {
		return <MyComponent {...state}/>;
	}
}

const app = new App({
	renderer: el => {
		render(el, document.querySelector('#dynamic_section'));
	},
	initialState: {count: 0},
	middlewares: [
		(state) => {
			console.log(state);
			return state;
		}
	]
});

app.on(":start-async-updating", () => {
});

app.on(":end-async-updating", () => {
});

app.update(_initialState => ({count: 0}));

/*
var DynamicSection = React.createClass({
	render() {
		return <p>FixMe: this is dynamic section by React.js</p>;
	}
});

var dynamicSection = document.getElementById('dynamic_section');
if (dynamicSection) {
	ReactDOM.render(<DynamicSection />, dynamicSection);
}
*/

import * as React from 'react';
import {Component} from 'flumpt';

export default class MyComponent extends Component {
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



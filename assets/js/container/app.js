import * as React from 'react';
import {Flux} from 'flumpt';
import MyComponent from '../component/my_component';

export default class App extends Flux {
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



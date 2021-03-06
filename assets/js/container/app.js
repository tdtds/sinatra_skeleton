/*
 * app.js
 *
 * Copyright (C) 2016 by TADA Tadash <t@tdtds.jp>
 * You can modify and/or distribute this under GPL.
 */
import * as React from 'react';
import {Flux} from 'flumpt';
import {MuiThemeProvider, AppBar} from 'material-ui';
import Counter, {INCREMENT as COUNTER_INCREMENT} from '../component/counter';

export default class App extends Flux {
	subscribe() {
		this.on(COUNTER_INCREMENT, () => {
			this.update(({count}) => {
				return {count: count + 1};
			});
		});
	}
	render(state) {
		return (
			<div>
				<MuiThemeProvider>
					<AppBar title="FixMe" iconStyleLeft={{display: 'none'}} />
				</MuiThemeProvider>
				<Counter {...state}/>
			</div>
		);
	}
}



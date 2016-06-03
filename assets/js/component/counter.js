/*
 * counter.js
 *
 * Copyright (C) 2016 by TADA Tadash <t@tdtds.jp>
 * You can modify and/or distribute this under GPL.
 */
import * as React from 'react';
import {Component} from 'flumpt';

export const INCREMENT = "increment";

export default class Counter extends Component {
	componentDidMount() {
		this.dispatch(INCREMENT);
	}
	render() {
		return(
			<div>
				{this.props.count}
				<button onClick={() => this.dispatch(INCREMENT)}>++</button>
			</div>
		);
	}
}


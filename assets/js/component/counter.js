/*
 * counter.js
 *
 * Copyright (C) 2016 by TADA Tadash <t@tdtds.jp>
 * You can modify and/or distribute this under GPL.
 */
import * as React from 'react';
import {Component} from 'flumpt';
import {MuiThemeProvider, FloatingActionButton} from 'material-ui';
import {ContentAdd} from 'material-ui/svg-icons';

export const INCREMENT = "increment";

export default class Counter extends Component {
	componentDidMount() {
		this.dispatch(INCREMENT);
	}
	render() {
		const style = {marginTop: '1em', marginBottom: '0.5em'};
		return(
			<div style={{textAlign: 'center'}}>
				<MuiThemeProvider>
					<FloatingActionButton
							secondary={true}
							style={style}
							mini={true}
							onClick={() => this.dispatch(INCREMENT)}>
						<ContentAdd />
					</FloatingActionButton>
				</MuiThemeProvider>
				<br />
				{this.props.count}
			</div>
		);
	}
}


/*
 * main.js
 *
 * Copyright (C) 2016 by TADA Tadash <t@tdtds.jp>
 * You can modify and/or distribute this under GPL.
 */
import 'babel-polyfill';
import 'whatwg-fetch';
import * as React from 'react';
import {render} from 'react-dom';
import App from './container/app';

require('../css/main.css');

/* === HOT TO SET CSRF TOKEN USING rack_csrf GEM ===
 *
var csrf_token = document.querySelector('meta[name="_cstf"]').content;
fetch(..., {X_CSRF_TOKEN: csrf_token})...;
 *
 */

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

fetch("/initial.json").
then(response => response.json()).
then(json => app.update(_initialState => (json))).
catch(err => console.info(err));

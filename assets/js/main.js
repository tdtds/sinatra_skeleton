/*
 * main.jsx
 *
 * Copyright (C) 2015 by TADA Tadash <t@tdtds.jp>
 * You can modify and/or distribute this under GPL.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

require('../css/main.css');

jQuery.ajaxSetup({
	beforeSend: function(xhr) {
		var token = jQuery('meta[name="_csrf"]').attr('content');
		xhr.setRequestHeader('X_CSRF_TOKEN', token);
	}
});

var DynamicSection = React.createClass({
	render() {
		return <p>FixMe: this is dynamic section by React.js</p>;
	}
});

var dynamicSection = document.getElementById('dynamic_section');
if (dynamicSection) {
	ReactDOM.render(<DynamicSection />, dynamicSection);
}

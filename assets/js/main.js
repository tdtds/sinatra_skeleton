/*
 * main.jsx
 *
 * Copyright (C) 2015 by TADA Tadash <t@tdtds.jp>
 * You can modify and/or distribute this under GPL.
 */

jQuery.ajaxSetup({
	beforeSend: function(xhr) {
		var token = jQuery('meta[name="_csrf"]').attr('content');
		xhr.setRequestHeader('X_CSRF_TOKEN', token);
	}
});

var DynamicSection = React.createClass({displayName: "DynamicSection",
	render:function() {
		return React.createElement("p", null, "FixMe: this is dynamic section");
	}
});

var dynamicSection = document.getElementById('dynamic_section');
if (dynamicSection) {
	ReactDOM.render(React.createElement(DynamicSection, null), dynamicSection);
}

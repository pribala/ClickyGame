import React from "react";
import "./FooterComponent.css";

const FooterComponent = props => (
<footer className="fixed-bottom">
	<div className="container">
		<p className="text-center">{props.children}</p>
	</div>
</footer>
);

export default FooterComponent;

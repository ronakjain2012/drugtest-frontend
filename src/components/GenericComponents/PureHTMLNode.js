import React from "react";
import { Container } from "react-bootstrap";

const PureHTMLNode = (props) => {
	const schema = props.schema;
	return <div dangerouslySetInnerHTML={{ __html: schema.data }}></div>;
};

export default PureHTMLNode;

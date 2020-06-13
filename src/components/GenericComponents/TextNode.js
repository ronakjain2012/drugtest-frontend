import React from "react";
import { Col, FormGroup } from "react-bootstrap";

const TextNode = (props) => {
	const schema = props.schema;
	return (
		<Col md="auto" className={schema.custom_style}>{schema.data}</Col>
	);
};

export default TextNode;

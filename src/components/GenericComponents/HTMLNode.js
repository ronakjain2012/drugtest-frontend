import React from "react";
import { Col } from "react-bootstrap";

const HTMLNode = (props) => {
	const schema = props.schema;
	return (
		<Col md="auto" className={schema.custom_style} dangerouslySetInnerHTML={{ __html: schema.data }}></Col>
	);
};

export default HTMLNode;

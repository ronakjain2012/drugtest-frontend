import React from "react";
import { Form, Col, FormGroup } from "react-bootstrap";

const TextAreaField = (props) => {
	const schema = props.schema;
	const errors = props.errors || "";

	return (
		<FormGroup
			as={Col}
			lg={schema.style.includes("full-width") ? "12" : schema.style}
		>
			<div className="InputField form-fiel max-width">
				{schema.lable_hidden?' ':(<Form.Label style={{'justify-content':'inherit'}}>{schema.lable}</Form.Label>)}
				<Form.Control className="max-width" for="textarea" placeholder={schema.placeholder || ""} />
			</div>
		</FormGroup>
	);
};

export default TextAreaField;

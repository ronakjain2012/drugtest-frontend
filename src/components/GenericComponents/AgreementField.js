import React from "react";
import { Form, Col, Row, FormGroup } from "react-bootstrap";

const AgreementField = (props) => {
	const schema = props.schema;
	const errors = props.errors || "";

	return (
		<FormGroup
			as={Col}
			lg={schema.style.includes("full-width") ? "12" : schema.style}
		>
			<div className="InputField form-fiel max-width">
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label={schema.data} />
				</Form.Group>
			</div>
		</FormGroup>
	);
};

export default AgreementField;

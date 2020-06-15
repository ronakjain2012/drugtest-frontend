import React from "react";
import { Form, Col, Row, FormGroup } from "react-bootstrap";

const SelectField = (props) => {
	const schema = props.schema;
	const errors = props.errors || "";
	const selectValues = props.selectValues||schema.values;
	return (
		<FormGroup
			as={Col}
			lg={schema.style.includes("full-width") ? "12" : schema.style}
		>
			<div className="InputField form-fiel max-width">
				{schema.lable_hidden ? (
					" "
				) : schema.lable_inline || null ? (
					<Form.Group as={Row}>
						<Form.Label column sm={3}>
							{schema.lable}
						</Form.Label>
						<Col sm={9}>
						<Form.Control as="select" className="max-width">
					{selectValues.map((i) => (
						<option value={i.value}>{i.name}</option>
					))}
				</Form.Control>
						</Col>
					</Form.Group>
				) : (
					<Form.Label style={{ "justify-content": "inherit" }}>
						{schema.lable}
					</Form.Label>
				)}
				{schema.lable_inline || null ? (
					""
				) : (
					<Form.Control as="select" className="max-width">
					{selectValues.map((i) => (
						<option value={i.value}>{i.name}</option>
					))}
				</Form.Control>
				)}
			</div>
		</FormGroup>
	);
};

export default SelectField;

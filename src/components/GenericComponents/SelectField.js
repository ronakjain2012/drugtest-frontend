import React from "react";
import { Form, Col, FormGroup } from "react-bootstrap";

const SelectField = (props) => {
	const schema = props.schema;
	const errors = props.errors || "";
	const selectValues = props.selectValues;
	return (
		<FormGroup
			as={Col}
			lg={schema.style.includes("full-width") ? "12" : schema.style}
		>
			<div className="SelectField form-field max-width">
				{schema.lable_hidden ? (
					" "
				) : (
					<Form.Label style={{ "justify-content": "inherit" }}>
						{schema.lable}
					</Form.Label>
				)}

				<Form.Control as="select" className="max-width">
					{selectValues.map((i) => (
						<option value={i.value}>{i.name}</option>
					))}
				</Form.Control>
			</div>
		</FormGroup>
	);
};

export default SelectField;

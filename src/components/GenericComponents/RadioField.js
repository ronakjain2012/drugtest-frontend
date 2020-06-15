import React from "react";
import { Form, Col, Row, FormGroup } from "react-bootstrap";

const RadioField = (props) => {
	const schema = props.schema;
	const errors = props.errors || "";
	console.log("asd", schema);
	return (
		<FormGroup
			as={Col}
			lg={schema.style.includes("full-width") ? "12" : schema.style}
		>
			<div className="RadioField form-fiel max-width">
				{schema.lable_hidden ? (
					" "
				) : schema.lable_inline || null ? (
					<Form.Group as={Row}>
						<Form.Label column sm={3}>
							{schema.lable}
						</Form.Label>
						<Col sm={9}>
							{schema.values.map((i, k) => (
								<Form.Check
									inline
									label={i.name}
									type="radio"
									name={schema.field_id}
									id={schema.field_id + "-" + k}
								/>
							))}
						</Col>
					</Form.Group>
				) : (
					<Form.Label style={{ "justify-content": "inherit" }}>
						{schema.lable}
					</Form.Label>
				)}
				{schema.lable_inline || null
					? ""
					: schema.values.map((i, k) => (
							<Form.Check
								inline
								label={i.name}
								type="radio"
								name={schema.field_id}
								id={schema.field_id + "-" + k}
							/>
					  ))}
			</div>
		</FormGroup>
	);
};

export default RadioField;

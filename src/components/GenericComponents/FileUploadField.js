import React, { useState } from "react";
import { Form, Col, Row, FormGroup } from "react-bootstrap";

const FileUploadField = (props) => {
	const schema = props.schema;
	const errors = props.errors || "";
	const [startDate, setStartDate] = useState(new Date());

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
						<Form.File
							className="position-relative"
							required
							name={schema.lable}
							isInvalid={!!errors.file}
							feedback={errors.file}
							feedbackTooltip
							/>
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
					<Form.File
							className="position-relative"
							required
							name={schema.lable}
							isInvalid={!!errors.file}
							feedback={errors.file}
							feedbackTooltip
							/>
				)}
			</div>
		</FormGroup>
	);
};

export default FileUploadField;

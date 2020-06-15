import React, { useState } from "react";
import { Form, Col, Row, FormGroup } from "react-bootstrap";
import DatePicker from "react-date-picker";

const DatepickerField = (props) => {
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
							<DatePicker
								onChange={(date) => setStartDate(date)}
								value={startDate}
						className="form-control"

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
					<DatePicker
						onChange={(date) => setStartDate(date)}
						value={startDate}
						className="form-control"
					/>
				)}
			</div>
		</FormGroup>
	);
};

export default DatepickerField;

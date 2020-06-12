import React from "react";
import DynamicImport from "../Utils/DynamicImport";
import ComponentLoad from "../Utils/ComponentLoad";
import FormsSchema from "../../config/FormsSchema.json";
import { withRouter } from "react-router-dom";
import { Card, Row } from "react-bootstrap";

const RenderElement = (props) => {
	return <p> {props.field.field_id} </p>;
};

const FormGenerator = (props) => {
	const match = props.match;
	const form = FormsSchema[match.params.formUrl];
	console.log("tag", form);
	return (
		<div className="FormRouteHandler">
			<Row className="align-content-center justify-content-center">
				<Card style={{ width: "90rem" }} className="shadow-md rounded-sm">
					<Card.Body>
						{Object.keys(form.field_schema).map((f, k) => (
							<RenderElement key={k} field={form.field_schema[f]} />
						))}
					</Card.Body>
				</Card>
			</Row>
		</div>
	);
};

export default withRouter(FormGenerator);

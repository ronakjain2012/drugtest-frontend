import React from "react";
import DynamicImport from "../Utils/DynamicImport";
import ComponentLoad from "../Utils/ComponentLoad";
import CountryStates from "../../config/CountryStates.json";
import FormsSchema from "../../config/FormsSchema.json";
import { withRouter } from "react-router-dom";
import { Card, Row, Form, Col, Button } from "react-bootstrap";

const ElInputField = (props) => (
	<DynamicImport load={() => import("../GenericComponents/InputField")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);

const ElTextNode = (props) => (
	<DynamicImport load={() => import("../GenericComponents/TextNode")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);

const ElSelectField = (props) => (
	<DynamicImport load={() => import("../GenericComponents/SelectField")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);

const ElTextAreaField = (props) => (
	<DynamicImport load={() => import("../GenericComponents/TextAreaField")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);

const RenderElement = (props) => {
	switch (props.field.type) {
		case "input":
			return <ElInputField schema={props.field} />;
		case "select":
			return <ElSelectField schema={props.field} />;
		case "select_state":
			return (
				<ElSelectField schema={props.field} selectValues={CountryStates} />
			);
		case "text":
			return <ElTextNode schema={props.field} />;
		case "textarea":
			return <ElTextAreaField schema={props.field} />;
		case "parent":
			return <ParentForm schema={props.field} formUrl={props.formUrl} />;
		default:
			console.log("input_field_type", props.field.type);
			return "";
	}
};

const ParentForm = (props) => {
	const form = FormsSchema[props.formUrl];
	let childForm = [];
	Object.keys(form.field_schema).map((f) => {
		if (form.field_schema[f].parent_id === props.schema.field_id) {
			childForm.push(form.field_schema[f]);
		}
	});
	return (
		<Col lg="12">
			<label className="form-label justify-content-start">
				{props.schema.lable}
			</label>
			<Row>
				{childForm.map((f, k) => (
					<RenderElement key={k} field={f} formUrl={props.formUrl} />
				))}
			</Row>
		</Col>
	);
};

const FormGenerator = (props) => {
	const match = props.match;
	const form = FormsSchema[match.params.formUrl];
	const parentFieldId = props.parentFieldId || null;
	return (
		<div className="FormRouteHandler">
			<div className="align-content-center justify-content-center align-self-center">
				<Card style={{ width: "90rem" }} className="shadow-md rounded-sm">
					<Card.Body>
						<Row className="align-content-center justify-content-center">
							<Col lg="12">
								<img src={form.page_body.logo} width="20%"></img>
							</Col>
							<Col lg="12">
								<h2>{form.page_body.title}</h2>
							</Col>
							<Col lg="12">
								<h2>{form.page_body.description}</h2>
							</Col>
						</Row>
						<Row className="text-left">
							<Form inline={form.inline_form}>
								{Object.keys(form.field_schema).map((f, k) =>
									form.field_schema[f].parent_id === parentFieldId ? (
										<RenderElement
											key={k}
											field={form.field_schema[f]}
											formUrl={match.params.formUrl}
										/>
									) : (
										""
									)
								)}
							</Form>
						</Row>
                        <br/>
						<Row className="text-right">
							<Col>
                                <Button variant="primary" size="lg" active>
                                    Save
                                </Button>{" "}
                                <Button variant="primary" size="lg" active>
                                    Save & Print
                                </Button>{" "}
                            </Col>
						</Row>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default withRouter(FormGenerator);

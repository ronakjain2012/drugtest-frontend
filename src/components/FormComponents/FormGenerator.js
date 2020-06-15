import React from "react";
import DynamicImport from "../Utils/DynamicImport";
import ComponentLoad from "../Utils/ComponentLoad";
import CountryStates from "../../config/CountryStates.json";
import FormsSchema from "../../config/FormsSchema.json";
import { withRouter } from "react-router-dom";
import { Card, Row, Form, Col, Button, Container } from "react-bootstrap";

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

const ElRadioField = (props) => (
	<DynamicImport load={() => import("../GenericComponents/RadioField")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);
const ElHr = (props) => (
	<DynamicImport load={() => import("../GenericComponents/HrNode")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);
const MultiParent = (props) => (
	<DynamicImport load={() => import("../GenericComponents/MultiParent")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);


const ElHtmlNode = (props) => (
	<DynamicImport load={() => import("../GenericComponents/HTMLNode")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);


const ElDate = (props) => (
	<DynamicImport load={() => import("../GenericComponents/DatepickerField")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);



const ElFileUpload = (props) => (
	<DynamicImport load={() => import("../GenericComponents/FileUploadField")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);


const ElAgreementField = (props) => (
	<DynamicImport load={() => import("../GenericComponents/AgreementField")}>
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
		case "radio":
			return <ElRadioField schema={props.field} />;
		case "text":
			return <ElTextNode schema={props.field} />;
		case "textarea":
			return <ElTextAreaField schema={props.field} />;
		case "date":
			return <ElDate schema={props.field} />;
		case "file":
			return <ElFileUpload schema={props.field} />;
		case "agree":
			return <ElAgreementField schema={props.field} />;
		case "hr":
			return <ElHr />;
		case "parent":
			return <ParentForm schema={props.field} formUrl={props.formUrl} />;
		case "parent_multi":
			return <MultiParent schema={props.field} formUrl={props.formUrl} />;
		case "html":
			return <ElHtmlNode schema={props.field} />;
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
		return f;
	});
	return (
		<Col lg="12">
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
		<div
			className={
				form.form_styling.includes("top_center")
					? "FormGenerator margin-top-1"
					: "FormGenerator self-center justify-content-center align-items-center"
			}
		>
			<Container>
				<Row>
					<Col md={12}>
						<Card className="shadow-md rounded-sm mx-auto">
							<Card.Body>
								<Row className="text-center">
									{form.form_styling.includes("top_center") ? (
										<Col lg="12">
											<Row className="bg-primary border-radius-5 btn-gradient-hover btn-gradient-primary text-white m-2 padding-1">
												<Col lg="12">
													<h2>{form.page_body.title}</h2>
												</Col>
												<Col lg="12">
													<h4>{form.page_body.description}</h4>
												</Col>
											</Row>
											<br/>
											<br/>

										</Col>
									) : (
										<Col lg="12">
											<div className="form-topheader">
												<img src={form.page_body.logo} alt={form.page_body.title} width="20%"></img>
												<h2>{form.page_body.title}</h2>
												<h2>{form.page_body.description}</h2>
											</div>
										</Col>
										
									)}
								</Row>
								<Form inline={form.inline_form}>
									<Row className="text-left">
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
									</Row>
								</Form>

								<Row className="text-right">
									<Col>
										<div className="bottom-btn-group pull-right">
											<Button variant="primary" size="md" active>
												Save
											</Button>{" "}
											<Button variant="primary" size="md" active>
												Save & Print
											</Button>{" "}
										</div>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default withRouter(FormGenerator);

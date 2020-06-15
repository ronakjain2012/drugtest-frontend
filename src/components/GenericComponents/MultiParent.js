import React,{useState} from "react";
import { Row, Button,Col } from "react-bootstrap";
import DynamicImport from "../Utils/DynamicImport";
import ComponentLoad from "../Utils/ComponentLoad";
import CountryStates from "../../config/CountryStates.json";
import FormsSchema from "../../config/FormsSchema.json";
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

const RenderElement = (props) => {
	console.log("asd", props.field);
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
		case "hr":
			return <ElHr />;
		case "parent":
			return <ParentForm schema={props.field} formUrl={props.formUrl} />;
		case "parent_multi":
			return <MultiParent schema={props.field} formUrl={props.formUrl} />;
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

const MultiParent = (props) => {
	const form = FormsSchema[props.formUrl];
	let childForm = [];
	Object.keys(form.field_schema).map((f) => {
		if (form.field_schema[f].parent_id === props.schema.field_id) {
			childForm.push(form.field_schema[f]);
		}
	});
	const [rowsData, setRowsData] = useState({"data":[childForm]});
	function addNewRow() {

		let r = rowsData;
		r.data.push(rowsData.data[0]);
		setRowsData({
			...rowsData,
			'data':r.data
		});
		console.log('tag', rowsData)
	}
	return (
		<Col lg="12" className="MultiParent p-4">
			<label className="form-label justify-content-start">
				{props.schema.lable}
			</label>

			{rowsData['data'].map((r,ki) => (
				<Row className=" shadow-sm p-1" key={ki}>
					{childForm.map((f, k) => (
						<RenderElement key={k} field={f} formUrl={props.formUrl} />
					))}
				</Row>
			))}
			<Row>
				<Col className="mx-2 p-3">
					<Button
						variant="primary"
						size="sm"
						className="rounded"
						onClick={addNewRow}
					>
						+ Add More
					</Button>{" "}
				</Col>
			</Row>
		</Col>
	);
};


export default MultiParent;

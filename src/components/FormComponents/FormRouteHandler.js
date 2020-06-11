import React from 'react';
import T from './../Utils/T'
import DynamicImport from "./../Utils/DynamicImport";
import ComponentLoad from "./../Utils/ComponentLoad";
import FormsData from "./../../config/PublicForms.json";
import { withRouter } from "react-router-dom";

const PublicForms = (props) => (
	<DynamicImport load={() => import("../../views/PublicForms")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);

const DecideAction = (prop) => {
    if(prop.form.type==="form_list"){
        return <PublicForms parentId={prop.form.form_id} />
    }
}
const FormRouteHandler = (props) => {
    const match = props.match;
    const form = Object.values(FormsData).find((i)=>i.form_id===match.params.formUrl);
    return (
        <div className="FormRouteHandler">
            <DecideAction form={form} />
        </div>
    )
}

export default withRouter(FormRouteHandler)
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DynamicImport from "./../Utils/DynamicImport";
import ComponentLoad from "./../Utils/ComponentLoad";
import FormsData from "./../../config/PublicForms.json";
import _ from "underscore";
const PublicForms = (props) => (
	<DynamicImport load={() => import("../../views/PublicForms")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);

const FormRouteHandler = (props) => (
	<DynamicImport load={() => import("../FormComponents/FormRouteHandler")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);

let RouterHandler = [];
const FormsDataValue = Object.values(FormsData);
if (
	_.uniq(_.pluck(FormsDataValue, "form_id")).length !== FormsDataValue.length
) {
	console.error("PublicForms.json have duplicate form_id");
} else {
	_.each(FormsDataValue, (i) => {
		RouterHandler.push({
			...i,
			com: FormRouteHandler,
		});
	});
}
Object.freeze(RouterHandler)

const Routes = (props) => {
	return (
		
		<BrowserRouter>
			<Switch>
				{RouterHandler.map((page, index) => (
					<Route
						exact
						path={page.url}
						component={page.com}
						key={index}
					/>
				))}
				<Route path="/" exact component={PublicForms} />

			</Switch>
		</BrowserRouter>
	);
};

export default Routes;

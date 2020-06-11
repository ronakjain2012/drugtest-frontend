import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DynamicImport from "./../Utils/DynamicImport";
import ComponentLoad from "./../Utils/ComponentLoad";
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

const Routes = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={PublicForms} />
				<Route exact path="/forms/:formUrl" render={props => <FormRouteHandler {...props} />} />

			</Switch>
		</BrowserRouter>
	);
};

export default Routes;

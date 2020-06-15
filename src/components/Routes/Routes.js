import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DynamicImport from "./../Utils/DynamicImport";
import ComponentLoad from "./../Utils/ComponentLoad";	
import { withRouter } from 'react-router';

const PublicForms = (props) => (
	<DynamicImport load={() => import("../../views/PublicForms")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);
const LoginForm = (props) => (
	<DynamicImport load={() => import("../../views/LoginForms")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);

const AdminWrapper = (props) => (
	<DynamicImport load={() => import("../../views/AdminWrapper")}>
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
				<Route path="/login" exact component={LoginForm} />
				<Route path="/admin" exact component={AdminWrapper} />
				<Route exact path="/forms/:formUrl" render={props => <FormRouteHandler {...props} />} />

			</Switch>
		</BrowserRouter>
	);
};

export default withRouter(Routes);

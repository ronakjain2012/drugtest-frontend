import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import DynamicImport from "./../Utils/DynamicImport";
import ComponentLoad from "./../Utils/ComponentLoad";

const PublicForms = (props) => (
	<DynamicImport load={() => import("../../views/PublicForms")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);

const Routes = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={PublicForms} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;

import React from "react";
import "./assets/css/App.css";
import "./assets/scss/App.scss";
import { Provider } from "react-redux";
import store from "./store/index";
// import {en} from './config/GlobalTranslations.json'
// import TestingRedux from "./components/Testing/TestingRedux";
import Routes from "./components/Routes/Routes";
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				{/* <TestingRedux /> */}
				<Routes />
			</div>
		</Provider>
	);
}

export default App;

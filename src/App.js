import React from "react";
import "./assets/css/App.css";
import "./assets/scss/App.scss";
import { Provider } from "react-redux";
import store from "./store/index";
// import {en} from './config/GlobalTranslations.json'
import TestingRedux from "./components/TestingRedux";
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<TestingRedux />
				</header>
			</div>
		</Provider>
	);
}

export default App;

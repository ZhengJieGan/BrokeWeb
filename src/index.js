import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ColorProvider } from "./base/colorContext";
import { Provider } from "react-redux";
import {
	legacy_createStore as createStore,
	applyMiddleware,
	compose,
} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ColorProvider>
				<App />
			</ColorProvider>
		</BrowserRouter>
	</Provider>
);

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import { reducer } from "./toDoListRedux";

import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer);

const AppWithStore = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(AppWithStore, document.getElementById("app"));
registerServiceWorker();

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/basic/PageNotFound";
import { AllRoutes, RoutesObj } from "./AllRoutes";

export default function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				{/* .map() ensures we always have a returned value */}
				{AllRoutes.map((entry, index) => {
					return <Route key={index} exact={entry.ex} path={entry.path} element={entry.comp} />;
				})}

				{Object.values(RoutesObj.non_visual).map((entry, index) => {
					return <Route key={index} exact={entry.ex} path={entry.path} element={entry.comp} />;
				})}
				<Route key='404' path='*' element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

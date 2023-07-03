import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import './index.css';
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import CreateCommunityPage from "./component/page/CreateCommunityPage";
import LoginPage from "./component/page/LoginPage";

function App() {
  return (
    <BrowserRouter>
			<Routes>
				<Route index element={<MainPage />} />
				<Route path="create-community" element={<CreateCommunityPage />} />
				<Route path="login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;

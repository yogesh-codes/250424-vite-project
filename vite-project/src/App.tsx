import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import TodosPage from "./components/TodosPage/TodosPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";
import AboutPage from "./components/AboutPage/AboutPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<UserLoginPage />} />
                <Route path="/" element={<TodosPage />} />
                <Route path="/profile" element={<TodosPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

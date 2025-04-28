import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import TodosPage from "./components/TodosPage/TodosPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
    return (
        <BrowserRouter basename="/250424-vite-project/">
            <Routes>
                <Route path="/login" element={<UserLoginPage />} />
                <Route path="/" element={<TodosPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

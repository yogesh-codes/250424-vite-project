import { useState } from "react";
import bg_wallpaper from "bg-1.webp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Components
import Header from "./components/Header/Header";
import TodoPage from "./components/TodoPage/TodoPage";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <Header />
            <TodoPage />
            <Footer />
        </div>
    );
}

export default App;

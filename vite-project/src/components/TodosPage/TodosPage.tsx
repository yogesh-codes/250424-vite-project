import "./TodosPage.css";
import { useEffect, useState } from "react";

//Components
import TodoItemAdder from "./TodoItemAdder/TodoItemAdder";
import TodoItemsContainer from "./TodoItemsContainer/TodoItemsContainer";
import Header from "../Header/Header";

import { toast } from "react-toastify";

type todoType = { title: string };

function TodoPage() {
    const [todos, setTodos] = useState<todoType[]>([]);

    const addTodo = (newTodo: todoType) => {
        setTodos((prev) => [...prev, newTodo]);
        console.log("Updated list of todos are");
        console.log(todos);
    };

    // watch for changes, if changed, console log
    useEffect(() => {
        console.log("Updated list of todos are");
        console.log(todos);
        toast("Hello there");
    }, [todos]);

    return (
        <>
            <Header></Header>
            <section
                className="container-fluid TodoPage "
                style={{ maxWidth: "40em" }}
            >
                <TodoItemAdder onAddTodo={addTodo} />
                <div className="mb-2"></div>
                <TodoItemsContainer todos={todos} />
            </section>
        </>
    );
}

export default TodoPage;

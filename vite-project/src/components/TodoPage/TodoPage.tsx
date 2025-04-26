import AddTodo from "./AddTodo/AddTodo";
import "./TodoPage.css";
import TodoItemsContainer from "./TodoItemsContainer/TodoItemsContainer";

function TodoPage() {
    return (
        <section className="container-fluid TodoPage">
            <AddTodo />
            <div className="mb-2"></div>
            <TodoItemsContainer />
        </section>
    );
}

export default TodoPage;

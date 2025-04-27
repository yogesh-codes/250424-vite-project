import TodoItem from "../TodoItem/TodoItem";

type todoType = {
    title: string;
};
interface TodoItemsContainerProps {
    todos: todoType[];
}

function TodoItemsContainer({ todos }: TodoItemsContainerProps) {
    let todosComponents = [];
    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i];
        todosComponents.push(
            <li>
                <TodoItem title={todo.title} />
            </li>
        );
    }
    return (
        <div className="container blurbg py-2">
            <div className="card-body">
                <ul>{todosComponents}</ul>
            </div>
        </div>
    );
}

export default TodoItemsContainer;

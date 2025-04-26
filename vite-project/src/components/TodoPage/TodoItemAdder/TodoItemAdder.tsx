import { useState } from "react";
import "./TodoItemAdder.css";

interface TodoItemAdderProps {
    onAddTodo: (todo: { title: string }) => void;
}

function TodoItemAdder({ onAddTodo }: TodoItemAdderProps) {
    let [newTodoTitle, setNewTodoTitle] = useState("");

    const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddTodo({ title: newTodoTitle });
        setNewTodoTitle("");
    };

    return (
        <div className="card blurbg">
            <div className="card-body">
                <form onSubmit={handleAdd}>
                    <label
                        hidden={false}
                        className="form-label"
                        htmlFor="newTodoTitle"
                    >
                        Enter new Todo Title:
                    </label>
                    <input
                        id="newTodoTitle"
                        type="text"
                        className="form-control"
                        placeholder="Eg: Buy groceries- onions, tomatoes, chili "
                        value={newTodoTitle}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setNewTodoTitle(e.target.value);
                        }}
                    />
                </form>
            </div>
        </div>
    );
}

export default TodoItemAdder;

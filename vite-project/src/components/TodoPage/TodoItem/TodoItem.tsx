type todoType = { title: string };

function TodoItem({ title }: todoType) {
    return (
        <div className="card mb-1">
            <div className="card-body py-1">{title}</div>
        </div>
    );
}

export default TodoItem;

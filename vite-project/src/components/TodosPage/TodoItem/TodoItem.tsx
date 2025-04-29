import EditableTextField from "../../EditableTextField/EditableTextField";

type todoType = { title: string };

function TodoItem({ title }: todoType) {
    return (
        <div className="card mb-1">
            <div className="card-body py-1">
                <EditableTextField
                    text={title}
                    placeholder="(Untitled task)"
                ></EditableTextField>
            </div>
        </div>
    );
}

export default TodoItem;

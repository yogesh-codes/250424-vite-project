import { useState } from "react";
import "./EditableTextField.css";
import { toast } from "react-toastify";

function EditableTextField({
    text,
    placeholder = "",
}: {
    text: string;
    placeholder: string;
}) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [textField, setTextField] = useState(text);

    const toggleEditMode = () => {
        console.log("now mode is ", isEditMode);
        setIsEditMode(!isEditMode);
        if (!isEditMode) {
            toast("successfully changed field");
        }
    };

    return (
        <div className="d-flex">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder={placeholder}
                    aria-label="Text with icon"
                    value={textField}
                    disabled={!isEditMode}
                    onDoubleClick={toggleEditMode}
                    onChange={(e) => {
                        setTextField(e.target.value);
                        console.log("you changed letter");
                    }}
                />
                <span
                    className={`input-group-text btn ${
                        isEditMode ? "btn-success" : "btn-primary"
                    }`}
                    onClick={toggleEditMode}
                >
                    {!isEditMode && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                        >
                            <path
                                className="spec-main"
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                                className="spec-border"
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                            />
                        </svg>
                    )}
                    {isEditMode && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-check2"
                            viewBox="0 0 16 16"
                        >
                            <path
                                className="spec-border"
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                            />
                            <path
                                className="spec-main"
                                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                            />
                        </svg>
                    )}
                </span>
            </div>
        </div>
    );
}

export default EditableTextField;

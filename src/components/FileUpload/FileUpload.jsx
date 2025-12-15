import { useRef, useState, useId } from "react";
import "./FileUpload.scss";

const FileUpload = ({ label, onChange, accept = "image/*" }) => {
    const inputRef = useRef(null);
    const [fileName, setFileName] = useState("");
    const inputId = useId();

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
        }
    };

    const handleChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            onChange?.(file);
        }
    };

    return (
        <div className="file-upload">
            {label && (
                <label
                    htmlFor={inputId}
                    className="file-upload__label"
                >
                    {label}
                </label>
            )}

            <div
                className="file-upload__box"
                role="button"
                tabIndex={0}
                aria-label={label || "File upload"}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
            >
                <span className="file-upload__text">
                    {fileName || "Click to upload"}
                </span>

                <input
                    id={inputId}
                    ref={inputRef}
                    type="file"
                    accept={accept}
                    onChange={handleChange}
                    hidden
                />
            </div>
        </div>
    );
};

export default FileUpload;

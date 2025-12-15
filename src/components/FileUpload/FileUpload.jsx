import { useRef } from "react";
import "./FileUpload.scss";

const FileUpload = ({ label, onChange, accept = "image/*" }) => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            onChange?.(file);
        }
    };

    return (
        <div className="file-upload">
            {label && <label className="file-upload__label">{label}</label>}

            <div className="file-upload__box" onClick={handleClick}>
                <span className="file-upload__text">Click to upload</span>
                <input
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

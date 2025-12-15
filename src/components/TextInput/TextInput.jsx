import { useId } from "react";
import "./TextInput.scss";

const TextInput = ({
    label,
    value,
    placeholder,
    onChange,
    id,
    name,
    type = "text",
    required = false,
    disabled = false,
    error,
    helperText,
    ...rest
}) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    const helperTextId = helperText ? `${inputId}-help` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    const describedBy = [helperTextId, errorId].filter(Boolean).join(" ") || undefined;

    return (
        <div className={`text-input ${error ? "has-error" : ""}`}>
            {label && (
                <label htmlFor={inputId} className="text-input__label">
                    {label}
                    {required && <span aria-hidden="true"> *</span>}
                </label>
            )}

            <input
                id={inputId}
                name={name}
                type={type}
                className="text-input__field"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                disabled={disabled}
                aria-required={required}
                aria-invalid={!!error}
                aria-describedby={describedBy}
                {...rest}
            />

            {helperText && (
                <div id={helperTextId} className="text-input__helper">
                    {helperText}
                </div>
            )}

            {error && (
                <div
                    id={errorId}
                    className="text-input__error"
                    role="alert"
                >
                    {error}
                </div>
            )}
        </div>
    );
};

export default TextInput;

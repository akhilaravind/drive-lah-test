import { useId } from "react";
import "./Switch.scss";

const Switch = ({
    checked = false,
    onChange,
    disabled = false,
    label,
    id
}) => {
    const generatedId = useId();
    const switchId = id || generatedId;

    const handleToggle = () => {
        if (!disabled) {
            onChange?.(!checked);
        }
    };

    const handleKeyDown = (e) => {
        if (disabled) return;

        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
        }
    };

    return (
        <div className="switch-wrapper">
            <button
                id={switchId}
                type="button"
                className={`switch ${checked ? "switch--on" : ""} ${disabled ? "switch--disabled" : ""}`}
                role="switch"
                aria-checked={checked}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : 0}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
            >
                <span className="switch__thumb" />
            </button>

            {label && (
                <label
                    htmlFor={switchId}
                    className="switch__label"
                    onClick={(e) => {
                        e.preventDefault();
                        handleToggle();
                    }}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default Switch;

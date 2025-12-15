import { useState, useRef, Activity } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "./DropDown.scss";

const Dropdown = ({ label = "Device", options = [], template }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(label);
    const [openUp, setOpenUp] = useState(false);

    const controlRef = useRef(null);
    const menuRef = useRef(null);

    const handleToggle = () => {
        if (!controlRef.current) return;

        const controlRect = controlRef.current.getBoundingClientRect();

        // Estimate menu height (safe fallback)
        const estimatedItemHeight = 40;
        const menuHeight =
            options.length > 0
                ? options.length * estimatedItemHeight
                : estimatedItemHeight;

        const spaceBelow = window.innerHeight - controlRect.bottom;
        const spaceAbove = controlRect.top;

        const shouldOpenUp =
            spaceBelow < menuHeight && spaceAbove > menuHeight;

        setOpenUp(shouldOpenUp);
        setIsOpen((prev) => !prev);
    };

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className={`dropdown ${openUp ? "dropdown__up" : ""}`}>
            <div
                ref={controlRef}
                className="dropdown__control"
                onClick={handleToggle}
            >
                <span className="dropdown__value">{selected}</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <Activity mode={isOpen ? "visible" : "hidden"}>
                <ul ref={menuRef} className="dropdown__menu">
                    {options.length ? (
                        options.map((option, index) => (
                            <li
                                key={index}
                                className="dropdown__item"
                                onClick={() => handleSelect(option)}
                            >
                                {template ? template(option) : option}
                            </li>
                        ))
                    ) : (
                        <li className="dropdown__item disabled">
                            No Option Available
                        </li>
                    )}
                </ul>
            </Activity>
        </div>
    );
};

export default Dropdown;

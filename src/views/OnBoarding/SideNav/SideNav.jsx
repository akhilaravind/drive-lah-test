import { Activity } from "react";
import "./SideNav.scss";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import { Dropdown, AnimateSlide, Grow } from "@components";
import { useViewportWidth } from "@hooks/useViewportWidth";
import { useQueryParams } from "../../../hooks/useQueryParams";

const sidebarItems = [
    "Location",
    "About",
    "Features",
    "Rules",
    "Pricing",
    "Promotion",
    "Pictures",
    "Insurance",
    "Subscription",
    "Device",
    "Easy Access",
];

export default function SideNav({navVisited}) {
    const navigate = useNavigate();
    const location = useLocation();
    const view = useQueryParams('view');

    const width = useViewportWidth();
    const isMobile = width < 768;

    const handleActiveMenuSelection = async(menuItem) => {
        // Update the query param `view` without reloading
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('view', menuItem.toLowerCase());
        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    };

    const handleKeySelect = (e, item) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleActiveMenuSelection(item);
        }
    };

    const dropDownTemplate = (option) => {
        const isActive = option.toLowerCase() === view.toLowerCase();

        return (
            <div
                role="option"
                tabIndex={0}
                aria-selected={isActive}
                className={`option-template ${isActive ? "active" : ""} ${!navVisited.includes(option) ? "not-visited" : ""
                    }`}
                onClick={() => handleActiveMenuSelection(option)}
                onKeyDown={(e) => handleKeySelect(e, option)}
            >
                <span>{option}</span>
                {navVisited.includes(option) && (
                    <FaCheckCircle aria-hidden="true" />
                )}
            </div>
        );
    };


    return (
        <>
            {/* DESKTOP SIDE NAV */}
            <AnimateSlide open={!isMobile}>
                <Activity mode={isMobile ? "hidden" : "visible"}>
                    <ul
                        className="side-nav__menu"
                        role="menu"
                        aria-orientation="vertical"
                    >
                        {sidebarItems.map((item) => {
                            const isActive =
                                item.toLowerCase() === view.toLowerCase();

                            return (
                                <li
                                    key={item}
                                    role="menuitem"
                                    tabIndex={0}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`side-nav__menu__item ${isActive ? "active" : ""
                                        } ${!navVisited.includes(item) ? "not-visited" : ""}`}
                                    onClick={() => handleActiveMenuSelection(item)}
                                    onKeyDown={(e) => handleKeySelect(e, item)}
                                >
                                    <span>{item}</span>

                                    <Grow isOpen={navVisited.includes(item)}>
                                        <FaCheckCircle aria-hidden="true" />
                                    </Grow>
                                </li>
                            );
                        })}
                    </ul>
                </Activity>
            </AnimateSlide>

            {/* MOBILE DROPDOWN */}
            <Activity mode={isMobile ? "visible" : "hidden"}>
                <Dropdown
                    selected={view}
                    options={sidebarItems}
                    template={dropDownTemplate}
                />
            </Activity>
        </>
    );
}

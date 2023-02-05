import React from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

const Dropdown = ({ closeDropdown }) => {
    const ref = useDetectClickOutside({ onTriggered: closeDropdown });
    return (
        <div className="dropdown" ref={ref}>
            <p>This is a dropdown!</p>
        </div>
    );
};

export default Dropdown;

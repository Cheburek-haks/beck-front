import React, { useRef, useEffect } from "react";
import "./App.css";
import APIRequest from "./components/APIRequest";
import Dropdown from "./components/DropDownList";
import user from "./img/1.jpg";
function App() {
    let menuRef = useRef();
    const [displayDropdown, setDisplayDropdown] = React.useState(false);

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setDisplayDropdown(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    return (
        <div className="App">
            <APIRequest />
            <div ref={menuRef}>
                <div
                    onClick={() => {
                        setDisplayDropdown(!displayDropdown);
                    }}
                >
                    <img style={{ width: 100, height: 100 }} src={user}></img>
                </div>

                {displayDropdown && (
                    <div style={{ width: 600, margin: "auto" }}>
                        <h3>
                            The Kiet
                            <br />
                            <span>Website Designer</span>
                        </h3>
                        <ul>asdasd asdasdasd asd</ul>
                        <ul>asdasd asdasdasd asd</ul>
                        <ul>asdasd asdasdasd asd</ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;

import { useEffect, useState } from "react";
import natureImg from "../assets/Nature.webp";
function Theme() {
    const [theme, setTheme] = useState("light");


    useEffect(() => {
        const card = document.getElementById("switch");
        if (card) {
            card.className = `container switch ${theme}`; 
        }
    }, [theme]);


    const changetheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    };

    return (
        <div className="container switch" id="switch">
            <h1>Theme Switcher</h1>
            <img src={natureImg} alt="nature" />
            <p>Golden trees, crystal lake, and endless calm.</p>
            <button onClick={changetheme}>
                Click to Change Mode
            </button>
        </div>
    );
}

export default Theme;

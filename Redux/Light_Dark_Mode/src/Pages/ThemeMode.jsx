import { useSelector, useDispatch } from "react-redux";
import { light, dark } from "../auth/themeSlice";

const ThemeMode = () => {
    const mode = useSelector((state) => state.theme.mode);

    const dispatch = useDispatch()

    return (
        <>
            <h2>Light Dark Mode </h2>
            <div className={mode == "dark" ? "dark-mode" : "light-mode"}>
                <h2>Current Theme: {mode}</h2>
                <button onClick={() => dispatch(light())}>Set Light Mode</button>
                <button onClick={() => dispatch(dark())}>Set Dark Mode</button>
            </div>
        </>
    )
}

export default ThemeMode
import * as React from "react";
import * as ReactDOM from "react-dom";
import {useState} from "react";

const wasm = import("../pkg");
wasm.then(m => {
    const App = () => {
        const [name, setName] = useState("");
        const handleChange = (e) => {
            setName(e.target.value);
        }
        const handleClick = () => {
            m.welcome(name);
        }

        return (
            <>
                <div>
                    <h1>Hi there</h1>
                    <button onClick={m.big_computation}>Run Computation</button>
                </div>
                <div>
                    <input type="text" onChange={handleChange}/>
                    <button onClick={handleClick}>Say hello!</button>
                </div>
            </>
        );
    };
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )
})

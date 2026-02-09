import { useState } from "react";
import "./NewCountry.css"
import trigger from "../assets/trigger(1).svg";

export default function NewCountry(props) {
    const [name, setName] = useState("");
    const [showDialog, setShowDialog] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        props.onAdd(name);
        hideDialog();
    }

    function hideDialog() {
        setName("");
        setShowDialog(false);
    }
    function handleKeyUp(e) {
        e.keyCode === 27 && hideDialog();
    }

    return (
        <>
            {showDialog ? (
                <form onSubmit={(e) => handleSubmit(e)} onKeyUp={(e) => handleKeyUp(e)}>
                    <div id="overlay" onClick={hideDialog}></div>
                    <div id="dialog">
                        <input id="name" type="text" placeholder="New Country Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <div>
                            <button disabled={name.trim().length === 0} type="submit" id="save">Save</button>
                            <button id="cancel" type="button" onClick={hideDialog}>Cancel</button>
                        </div>
                    </div>
                </form>
            ) : (
                <img src={trigger} alt="New Word" id="trigger" onClick={() => setShowDialog(true)} />
            )}
        </>
    )
}
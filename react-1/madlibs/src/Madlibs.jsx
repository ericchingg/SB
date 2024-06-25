import React, {useState} from "react";
import Form from "./Form";
import Story from "./Story";

function newMadlib() {
    const [madlib, setMadlib] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const addMadlib = (madlibParts) => {
        setMadlib(madlibParts);
        setSubmitted(true);
    }

    const restart = () => {
        setMadlib({});
        setSubmitted(false);
       };

    return (
        <div>
            <h1>Madlibs!</h1>

            {!submitted && (
                <div>
                    <Form userInput={addMadlib}/>
                </div>
            )}
        
            {submitted && (
                <div>
                    <Story madlibParts={madlib} restart={restart}/>
                </div>
            )}

        </div>
    )
}


export default newMadlib;
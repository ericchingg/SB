import React from "react";
import { Link } from "react-router-dom";

function Chips() {
    return (
        <div>
            <p>Yummy Chips</p>
            <p><Link to='/'>Go Back</Link></p>
        </div>
    )
}

export default Chips;
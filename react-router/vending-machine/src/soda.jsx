import React from "react";
import { Link } from "react-router-dom";

function Soda() {
    return (
        <div>
            <p>Tasty Soda</p>
            <p><Link to='/'>Go Back</Link></p>
        </div>
    )
}

export default Soda;
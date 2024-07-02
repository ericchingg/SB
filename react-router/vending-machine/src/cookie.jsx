import React from "react";
import { Link } from "react-router-dom";

function Cookie() {
    return (
        <div>
            <p>Delicious Soda</p>
            <p><Link to='/'>Go Back</Link></p>
        </div>
    )
}

export default Cookie;
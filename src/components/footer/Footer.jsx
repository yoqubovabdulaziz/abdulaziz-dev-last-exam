import React, { memo } from "react";
import "./Footer.scss";


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <h2>Footer</h2>
            </div>
        </footer>
    );
};

export default memo(Footer);
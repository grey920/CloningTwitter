import React from 'react';
import { Link } from 'react-router-dom';


const BlueButton = ({ to, name, children }) => (
    <div className="btnWrapper">
        <Link to={to}>
            <button className={name}>{children}</button>
        </Link>
    </div>
);

export default BlueButton;
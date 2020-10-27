import React from 'react';
import { Link } from 'react-router-dom';


const BlueButton = ({ to, name, children, onClick }) => (
    <div className="btnWrapper">
        <Link to={to}>
            <button className={name} onClick={onClick}>{children}</button>
        </Link>
    </div>
);

export default BlueButton;
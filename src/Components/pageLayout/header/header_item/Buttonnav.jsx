import React from 'react';
import 'Styles/Header/Buttonnav.css';

function Buttonnav({ classname }) {
    return <Buttondiv classes={classname} />;
}

const Buttondiv = ({ classes }) => (
    <div className={classes}>
        <button type="button" className="nav-btn btn-login">
            Login
        </button>
        <button type="button" className="nav-btn btn-signup">
            Sign Up
        </button>
    </div>
);
export default Buttonnav;

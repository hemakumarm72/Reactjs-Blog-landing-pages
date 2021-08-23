import React from 'react';
import 'Styles/Header/Buttonnav.css';

function Buttonnav({ classname }) {
    return <Buttondiv classes={classname} />;
}

const Buttondiv = ({ classes }) => (
    <div className={classes}>
        <a href="/login">
            <button type="button" className="nav-btn btn-login">
                Login
            </button>
        </a>
        <button type="button" className="nav-btn btn-signup">
            Sign Up
        </button>
    </div>
);
export default Buttonnav;

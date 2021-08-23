import React from 'react';
import 'Styles/Header/Buttonnav.css';
import { NavLink } from 'react-router-dom';

function Buttonnav({ classname }) {
    return <Buttondiv classes={classname} />;
}

const Buttondiv = ({ classes }) => (
    <div className={classes}>
        <NavLink className="link" to="/login">
            <button type="button" className="nav-btn btn-login">
                Login
            </button>
        </NavLink>

        <button type="button" className="nav-btn btn-signup">
            Sign Up
        </button>
    </div>
);
export default Buttonnav;

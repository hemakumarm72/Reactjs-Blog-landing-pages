import React from 'react';
import 'Styles/Header/LogoSection.css';
import { Headerimage } from 'Assest/Data/HomepagesData';

function LogoSection() {
    return (
        <>
            <Logosectiondiv />
        </>
    );
}

const Logo = ({
    classes,
    image = Headerimage[1].Image,
    indexvalue = Headerimage[1].index,
}) => (
    <img
        className={classes}
        width="100%"
        height="auto"
        src={image}
        key={indexvalue}
        alt="Logosection images."
    />
);

const Humburger = () => (
    <div className="humburger">
        <span className="line" />
        <span className="line" />
        <span className="line" />
    </div>
);

export const Logosectiondiv = () => (
    <div className="logosection">
        <Logo classes="logo" />
        <Humburger />
    </div>
);

export default LogoSection;

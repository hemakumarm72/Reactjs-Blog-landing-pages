import React from 'react';

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
        src={image}
        key={indexvalue}
        alt="Logosection images."
    />
);

const Humburger = () => (
    <div className="humburger" id="humburger-1">
        <span className="line" />
        <span className="line" />
        <span className="line" />
    </div>
);

export const Logosectiondiv = () => (
    <div className="logo-section">
        <Logo classes="logo" />
        <Humburger />
    </div>
);

export default LogoSection;

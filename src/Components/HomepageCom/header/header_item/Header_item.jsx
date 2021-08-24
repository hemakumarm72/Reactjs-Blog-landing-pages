import React from 'react';

// import { Headerimage } from 'Assest/Data/Image';

import Navigation from 'Components/HomepageCom/header/header_item/Navigation';

function Headeritem() {
    return (
        <>
            <HeaderContainer />
        </>
    );
}

const HeaderContainer = () => (
    <div className="header-container">
        <Headerinside />
    </div>
);

const Headerinside = () => (
    <>
        <div className="header">
            <Navigation />
        </div>
    </>
);

export default Headeritem;

import React from 'react';
import 'Styles/Header/Header_item.css';
// import { Headerimage } from 'Assest/Data/Image';

import Navigation from 'Components/pageLayout/header/header_item/Navigation';

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

export const Container = ({ children }) => (
    <div className="container">{children}</div>
);

export default Headeritem;

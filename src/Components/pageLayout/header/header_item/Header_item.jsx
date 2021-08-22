import React from 'react';
import { lazy } from '@loadable/component';
import 'Styles/Header/Header_item.css';
import { Headerimage } from 'Assest/Data/Image';
// import Navigation from 'Components/pageLayout/header/header_item/Navigation';
const Navigation = lazy(() =>
    import('Components/pageLayout/header/header_item/Navigation')
);

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

const Headerinside = ({ headerimage = Headerimage[0].Image }) => (
    <>
        <div
            className="header"
            style={{ backgroundImage: `url(${headerimage})` }}
        >
            <Navigation />
        </div>
    </>
);

export const Container = ({ children }) => (
    <div className="container">{children}</div>
);

export default Headeritem;

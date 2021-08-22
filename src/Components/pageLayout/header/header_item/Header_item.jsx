import React from 'react';
import 'Styles/Header/Header_item.css';
import { Headerimage } from 'Assest/Data/Image';

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

const Navigation = () => (
    <Container>
        <div className="navigation">
            <h1>navigation</h1>
        </div>
    </Container>
);

export const Container = ({ children }) => (
    <div className="container">{children}</div>
);

export default Headeritem;

import React from 'react';
import 'Styles/Header/Header.css';

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
        <Container>
            <div className="header">
                <h1>Header work</h1>
            </div>
        </Container>
    </>
);

const Container = ({ children }) => (
    <div className="container">
        <h1>Container inside</h1>
        {children}
    </div>
);

export default Headeritem;

import React from 'react';
import { Container } from 'Components/pageLayout/Container/Container';
import 'Styles/Header/Navigation.css';
import LogoSection from 'Components/pageLayout/header/header_item/LogoSection';

function Navigation() {
    return (
        <>
            <Navigationdiv />
        </>
    );
}

const Navigationdiv = () => (
    <Container>
        <div className="navigation">
            <LogoSection />
        </div>
    </Container>
);
export default Navigation;

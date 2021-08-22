import React from 'react';
import { Container } from 'Components/pageLayout/Container/Container';
import 'Styles/Header/Navigation.css';
import LogoSection from 'Components/pageLayout/header/header_item/LogoSection';
import Navigationbar from 'Components/pageLayout/header/header_item/Navigation_bar';
import Buttonnav from 'Components/pageLayout/header/header_item/Buttonnav';
import Headercontainertext from 'Components/pageLayout/header/header_item/Headercontainertext';

function Navigation() {
    return (
        <>
            <Navigationdiv />
        </>
    );
}

const Navigationdiv = () => (
    <>
        <Container>
            <div className="navigation">
                <LogoSection />
                <Navigationbar />
                <Buttonnav classname="button-container" />
            </div>
            <Headercontainertext />
        </Container>
    </>
);
export default Navigation;

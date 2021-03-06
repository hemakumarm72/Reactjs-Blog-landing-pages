import React from 'react';
import 'Styles/Homepages/Index.css';
import {
    Header,
    Features,
    StateFeatures,
    DesktopSection,
    Footer,
} from 'Components';

function Homepages() {
    return (
        <>
            <Header />
            <Features />
            <StateFeatures />
            <DesktopSection />
            <Footer />
        </>
    );
}

export default Homepages;

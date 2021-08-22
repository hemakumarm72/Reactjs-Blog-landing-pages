import React, { lazy } from 'react';
import 'Styles/Header/Header.css';
// import Headeritem from 'Components/pageLayout/header/header_item/Header_item';

const Headeritem = lazy(() =>
    import('Components/pageLayout/header/header_item/Header_item')
);

function Header() {
    return (
        <>
            <Headeritem />
        </>
    );
}

export default Header;

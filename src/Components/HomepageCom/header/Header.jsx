import React from 'react';
import 'Styles/Header/Header.css';

// import { lazy } from '@loadable/component';
import Headeritem from 'Components/HomepageCom/header/header_item/Header_item';

// const Headeritem = lazy(() =>
//     import('Components/pageLayout/header/header_item/Header_item')
// );

function Header() {
    return (
        <>
            <Headeritem />
        </>
    );
}

export default Header;

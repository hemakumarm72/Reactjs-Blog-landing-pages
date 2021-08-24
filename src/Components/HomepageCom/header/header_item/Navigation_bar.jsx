import React from 'react';

import { Navigationdatalink } from 'Assest/Data/HomepagesData';
import Buttonnav from 'Components/HomepageCom/header/header_item/Buttonnav';

function Navigationbar() {
    return (
        <>
            <Navigationbardiv />
        </>
    );
}

const Navigationbardiv = () => (
    <>
        <nav className="navigation_bar">
            <ul>
                {Navigationdatalink.map((d) => (
                    <li key={d.Name}>
                        <a href="#main" className="link-a" id={d.id}>
                            {d.Name}{' '}
                            <span className="arrow-light-span">
                                <img
                                    className="arrow-light"
                                    id={d.arrowlightid}
                                    src={d.Image}
                                    alt="Logosection images."
                                />
                            </span>
                        </a>

                        <Navbarinside data={d} />
                    </li>
                ))}
            </ul>
            <span />
            <span />
            <span />
            <span />
            <span className="line_active"> </span>
            <div className="bordercolor" />
            <Buttonnav classname="mobile_button" />
        </nav>
        <span />
        <span />
        <span />
        <span />
        <span />
    </>
);

const Navbarinside = ({ data }) => (
    <nav className={data.navclass} id={data.navid}>
        <ul className="dropdown-ul">
            {data.navulli.map((f) => (
                <li key={f.Droplink}>
                    <a key={f.Droplink} href="#main" className="dropdown-link">
                        {f.Droplink}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);
export default Navigationbar;

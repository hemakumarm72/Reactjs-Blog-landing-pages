import React from 'react';
import 'Styles/Header/Navigationbar.css';
import { Navigationdatalink } from 'Assest/Data/Image';

function Navigationbar() {
    return (
        <>
            <Navigationbardiv />
        </>
    );
}

const Navigationbardiv = () => (
    <nav className="navigation_bar">
        <ul>
            {Navigationdatalink.map((d) => (
                <li key={d.Name}>
                    <a href="#main" className="link-a" id={d.id}>
                        {d.Name}{' '}
                        <span className="arrow-light-span">
                            <img src={d.Image} alt="Logosection images." />
                        </span>
                    </a>
                    {/* pending work continued  */}
                </li>
            ))}
        </ul>
    </nav>
);
export default Navigationbar;

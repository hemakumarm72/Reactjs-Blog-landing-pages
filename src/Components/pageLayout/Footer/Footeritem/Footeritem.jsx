import React from 'react';
import 'Styles/Footer/Footer.css';
import { Navigationdatalink } from 'Assest/Data/HomepagesData';

function Footeritem() {
    return <Footerlinkdiv />;
}

const Footerlinkdiv = () => (
    <>
        <div className="footerlink">
            {Navigationdatalink.map((d) => (
                <article>
                    <h1>{d.Name}</h1>

                    <ul>
                        {d.navulli.map((f) => (
                            <li key={`${f.Droplink}1`}>
                                <a href="#main">{f.Droplink}</a>
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    </>
);

export default Footeritem;

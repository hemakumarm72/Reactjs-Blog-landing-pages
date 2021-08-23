import React from 'react';
import 'Styles/Footer/Footer.css';
import { Navigationdatalink } from 'Assest/Data/HomepagesData';
import 'Styles/mediaquery.css';

function Footeritem() {
    return <Footerlinkdiv />;
}

const Footerlinkdiv = () => (
    <>
        <div className="footerlink">
            {Navigationdatalink.map((d) => (
                <article key={d.key}>
                    <h1>{d.Name}</h1>

                    <ul>
                        {d.navulli.map((f) => (
                            <li key={f.key}>
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

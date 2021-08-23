import React from 'react';
import Footeritem from 'Components/HomepageCom/Footer/Footeritem/Footeritem';
import Logoimage from 'Assest/logo/logo.svg';

function Footer() {
    return (
        <footer>
            <section>
                <div className="logosection">
                    <img src={Logoimage} className="logo" alt="replace" />
                </div>
                <Footeritem />
            </section>
        </footer>
    );
}

export default Footer;

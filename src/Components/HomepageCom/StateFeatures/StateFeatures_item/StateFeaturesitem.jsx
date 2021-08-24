import React from 'react';
import phoneiconimage from 'Assest/images/illustration-phones.svg';

import LazyLoad from 'react-lazyload';

function StateFeaturesitem() {
    return (
        <>
            <Phoneiconsection />
            <Statetextsection />
        </>
    );
}

const Phoneiconsection = () => (
    <div className="phoneicon">
        <LazyLoad height="200" once>
            <img
                className="phone_illstration lazy"
                alt="replace"
                srcSet={phoneiconimage}
                src={phoneiconimage}
            />
        </LazyLoad>
    </div>
);

const Statetextsection = () => (
    <div className="state_infra_text">
        <Articlesection />
    </div>
);

const Articlesection = () => (
    <article>
        <h1>State of the Art Infrastructure</h1>
        <p>
            <span className="line_break">
                With reliability and speed in mind,
            </span>
            <span className="line_break">
                worldwide data centers provide the <br />
            </span>
            <span className="line_break">
                backbone for ultra-fast connectivity. This
            </span>
            <span>
                ensures your site will load
                <br />
                instantly, no
            </span>
            <span className="line_break">
                matter where your readers are, keeping
            </span>
            <span className="line_break">
                your site
                <br />
                competitive.
            </span>
        </p>
    </article>
);

export default StateFeaturesitem;

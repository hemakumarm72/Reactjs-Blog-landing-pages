import React from 'react';
import 'Styles/Desktopsection/Desktopsection.css';

function DesktopItem() {
    return (
        <>
            <div className="desktopicon" />
            <ContentSection />
        </>
    );
}

const ContentSection = () => (
    <div className="contentsection desktopsectiontext">
        <ArticlesSection1 />
        <ArticlesSection2 />
    </div>
);

const ArticlesSection1 = () => (
    <article>
        <h1>Free,open,simple</h1>
        <p>
            <span className="line_break">
                {' '}
                Blogr is a free and open source{' '}
            </span>
            <span className="line_break">
                application backed by a large
                <br />
                community
            </span>
            <span className="line_break">
                of helpful developers. It supports features
            </span>
            <span className="line_break">
                such as code
                <br />
                syntax highlighting, RSS
            </span>
            <span className="line_break">
                feeds, social media integration, third-
            </span>
            <span>
                party
                <br />
                commenting tools, and works
            </span>
            <span className="line_break">
                seamlessly with Google Analytics. The
            </span>
            <br />
            <span className="line_break">
                architecture is clean and is relatively easy
            </span>
            to learn.
        </p>
    </article>
);

const ArticlesSection2 = () => (
    <article>
        <h1>Powerful tooling</h1>
        <p>
            <span> Batteries included. We built a simple </span>and
            <span>
                straightforward CLI tool that <br />
                makes
            </span>
            <span> customization and deployment a breeze, </span>
            <span>
                but capable of <br />
                producing even the most
            </span>
            complicated sites.
        </p>
    </article>
);
export default DesktopItem;

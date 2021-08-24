import React from 'react';

function Featuresblock() {
    return (
        <div className="features_block">
            <ContentSection />
            <Futureimage />
        </div>
    );
}

const Arcticlesection1 = () => (
    <article>
        <h1>Introducing an extensible editor</h1>
        <p>
            <span className="line_break">
                Blogr features an exceedingly intuitive
            </span>
            <span className="line_break">
                interface which lets you focus
                <br />
                on one
            </span>
            <span className="line_break">
                thing: creating content. The editor
            </span>
            <span className="line_break">
                supports management of
                <br />
                multiple blogs
            </span>
            <span className="line_break">
                and allows easy manipulation of embeds
            </span>
            <span className="line_break">
                such as images,
                <br />
                videos, and Markdown.
            </span>
            <span className="line_break">
                Extensibility with plugins and themes
            </span>
            <span className="line_break">
                provide
                <br />
                easy ways to add functionality or
            </span>
            <span className="line_break">change the looks of a blog. </span>
            <br />
        </p>
    </article>
);
const Arcticlesection2 = () => (
    <article>
        <h1>Robust content management</h1>
        <p>
            Flexible content management enables users to easily move through
            <br />
            posts. Increase the usability of your blog by adding customized
            <br />
            categories, sections, format, or flow. With this functionality,
            you’re <br />
            in full control.
        </p>
    </article>
);

const ContentSection = () => (
    <div className="contentsection features_card">
        <Arcticlesection1 />
        <Arcticlesection2 />
    </div>
);

const Futureimage = () => <div className="future_image lazy" />;

export default Featuresblock;

import React from 'react';

function Headercontainertext() {
    return (
        <div className="textinner">
            <h1 className="header_text">
                <span>A modern</span> publishing platform
            </h1>
            <p className="header_text">
                Grow your audience and build your <span>online brand</span>
            </p>
            <div className="button_container">
                <button type="button" className="textbtn btn1">
                    Start for Free
                </button>
                <button type="button" className="textbtn btn2">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default Headercontainertext;

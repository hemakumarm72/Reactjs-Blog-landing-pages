import React from 'react';
import { BallBeat } from 'react-pure-loaders';

import 'Styles/Loader/loader.css';

class Loaderscreen extends React.Component {
    state = {
        loading: true,
    };

    render() {
        const { loading } = this.state;
        return (
            <div>
                <BallBeat color="#123abc" loading={loading} />
            </div>
        );
    }
}

const LoadingPage = () => {
    return (
        <div className="page">
            <p>Loading screen</p>
            <Loaderscreen />
        </div>
    );
};

export default LoadingPage;

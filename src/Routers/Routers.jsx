import React, { Suspense } from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import { lazy } from '@loadable/component';
import { Loader } from 'Elements';

// import { Homepages } from 'pages';

const Homepages = lazy(() => import('pages/Home/Homepages'));

function Routers() {
    return (
        <Routes>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path="/" exact component={Homepages} />
                </Switch>
            </Suspense>
        </Routes>
    );
}

export default Routers;

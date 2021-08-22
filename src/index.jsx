import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import { lazy } from '@loadable/component';
import Loader from './Elements/Loader/Loader';

// import App from './App'

const App = lazy(() => import('./App'));

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Loader />}>
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

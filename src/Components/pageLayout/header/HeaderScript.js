/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-restricted-globals
// eslint-disable-next-line func-names
// eslint-disable-next-line eqeqeq
// eslint-disable-next-line eqeqeq
const size = function () {
    function eventHandler() {
        if (screen.width > 1000) {
            const x = `${screen.width - 300}px`;

            document.getElementsByClassName('container')[0].style.maxWidth = x;
        } else {
            const x = `${screen.width}px`;

            document.getElementsByClassName('container')[0].style.maxWidth = x;
        }
    }
    window.addEventListener('resize', eventHandler, false);
};

window.document.addEventListener('DOMContentLoaded', size(), false);
function myfunction() {
    if (screen.width > 675) {
        const x = `${screen.width - 300}px`;

        document.getElementsByClassName('container')[0].style.maxWidth = x;
    } else {
        const x = `${screen.width}px`;

        document.getElementsByClassName('container')[0].style.maxWidth = x;
    }
}

document.addEventListener('load', myfunction());

// navigation link setup
// loader
const linkproduct = document.getElementById('link-product');
const linkcompany = document.getElementById('link-company');
const linkconnect = document.getElementById('link-connect');
// eslint-disable-next-line no-unused-vars
const atag = document.getElementsByTagName('A');
// eslint-disable-next-line camelcase
const navigation_bar = document.getElementsByClassName('navigation_bar')[0];
const product = document.getElementById('nav-product');
const company = document.getElementById('nav-company');
const connect = document.getElementById('nav-connect');
// eslint-disable-next-line no-unused-vars
const dropdown = document.getElementsByClassName('dropdown');
const humberclick = document.getElementById('humburger-1');
const arrowproduct = document.getElementById('arrowrotator-product');

const arrowcompany = document.getElementById('arrowrotator-company');
const arrowconnect = document.getElementById('arrowrotator-connect');

function btndropdownset(
    dropdownset,
    arrowset,
    elsedrop1,
    elsedrop2,
    elsearrow1,
    elsearrow2
) {
    if (dropdownset.classList.contains('close')) {
        dropdownset.classList.remove('close');
        dropdownset.classList.toggle('open');
    } else if (dropdownset.classList.contains('open')) {
        dropdownset.classList.remove('open');
        dropdownset.classList.toggle('close');
    }

    elsedrop1.classList.remove('open');
    elsedrop1.classList.add('close');
    elsearrow1.classList.remove('arrow-rotator');
    elsedrop2.classList.remove('open');
    elsedrop2.classList.add('close');
    elsearrow2.classList.remove('arrow-rotator');

    arrowset.classList.toggle('arrow-rotator');
}

// eslint-disable-next-line camelcase
function humberclose_open() {
    humberclick.classList.toggle('is-active');
    navigation_bar.classList.toggle('show');
}

linkproduct.onclick = function () {
    btndropdownset(
        product,
        arrowproduct,
        company,
        connect,
        arrowcompany,
        arrowconnect
    );
    company.classList.remove('open');
    company.classList.add('close');
    arrowcompany.classList.remove('arrow-rotator');
    connect.classList.remove('open');
    connect.classList.add('close');
    arrowconnect.classList.remove('arrow-rotator');
};

linkcompany.onclick = function () {
    btndropdownset(
        company,
        arrowcompany,
        product,
        connect,
        arrowproduct,
        arrowconnect
    );
};

linkconnect.onclick = function () {
    btndropdownset(
        connect,
        arrowconnect,
        product,
        company,
        arrowproduct,
        arrowcompany
    );
};

humberclick.onclick = function () {
    humberclose_open();
};

document.onclick = function (e) {
    if (
        e.target.className != 'link-a' &&
        e.target.className != 'dropdown-link' &&
        e.target.className != 'dropdown close' &&
        e.target.className != 'dropdown open'
    ) {
        product.classList.remove('open');
        product.classList.add('close');
        company.classList.remove('open');
        company.classList.add('close');
        connect.classList.remove('open');
        connect.classList.add('close');
        // company.classList.remove('open');
        // connect.classList.remove('open');
        arrowproduct.classList.remove('arrow-rotator');
        arrowcompany.classList.remove('arrow-rotator');
        arrowconnect.classList.remove('arrow-rotator');
    }
};

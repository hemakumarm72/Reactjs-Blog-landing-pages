import Bgpatternintro from 'Assest/images/bg-pattern-intro.svg';
import Logoimage from 'Assest/logo/logo.svg';
import Iconimagelight from 'Assest/images/icon-arrow-light.svg';

export const Headerimage = [
    {
        index: 1,
        Image: Bgpatternintro,
    },
    {
        index: 2,
        Image: Logoimage,
    },
];

export const Navigationdatalink = [
    {
        Name: 'Product',
        id: 'link-product',
        Image: Iconimagelight,
        navclass: 'dropdown dropdown1 close',
        navid: 'nav-product',
        navulli: [
            {
                Droplink: 'Overview',
            },
            {
                Droplink: 'Pricing',
            },
            {
                Droplink: 'Marketplace',
            },
            {
                Droplink: 'Features',
            },
            {
                Droplink: 'Integrations',
            },
        ],
    },
    {
        Name: 'Company',
        id: 'link-company',
        Image: Iconimagelight,
        navclass: 'dropdown dropdown2 close',
        navid: 'nav-company',
        navulli: [
            {
                Droplink: 'About',
            },
            {
                Droplink: 'Team',
            },
            {
                Droplink: 'Blog',
            },
            {
                Droplink: 'Careers',
            },
        ],
    },
    {
        Name: 'Connect',
        id: 'link-Connect',
        Image: Iconimagelight,
        navclass: 'dropdown dropdown3 close',
        navid: 'nav-connect',
        navulli: [
            {
                Droplink: 'Contact',
            },
            {
                Droplink: 'Newsletter',
            },
            {
                Droplink: 'LinkedIn',
            },
        ],
    },
];

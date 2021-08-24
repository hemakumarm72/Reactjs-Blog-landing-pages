import Bgpatternintro from 'Assest/images/bg-pattern-intro.svg';
import Logoimage from 'Assest/logo/logo.svg';
import Iconimagelight from 'Assest/images/icon-arrow-light.svg';
import { v4 as uuidv4 } from 'uuid';

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
        arrowlightid: 'arrowrotator-product',
        navclass: 'dropdown dropdown1 close',
        navid: 'nav-product',
        key: uuidv4(),
        navulli: [
            {
                key: uuidv4(),
                Droplink: 'Overview',
            },
            {
                key: uuidv4(),
                Droplink: 'Pricing',
            },
            {
                key: uuidv4(),
                Droplink: 'Marketplace',
            },
            {
                key: uuidv4(),
                Droplink: 'Features',
            },
            {
                key: uuidv4(),
                Droplink: 'Integrations',
            },
        ],
    },
    {
        Name: 'Company',
        id: 'link-company',
        Image: Iconimagelight,
        arrowlightid: 'arrowrotator-company',
        navclass: 'dropdown dropdown2 close',
        navid: 'nav-company',
        key: uuidv4(),
        navulli: [
            {
                key: uuidv4(),
                Droplink: 'About',
            },
            {
                key: uuidv4(),
                Droplink: 'Team',
            },
            {
                key: uuidv4(),
                Droplink: 'Blog',
            },
            {
                key: uuidv4(),
                Droplink: 'Careers',
            },
        ],
    },
    {
        Name: 'Connect',
        id: 'link-Connect',
        Image: Iconimagelight,
        arrowlightid: 'arrowrotator-connect',
        navclass: 'dropdown dropdown3 close',
        navid: 'nav-connect',
        key: uuidv4(),
        navulli: [
            {
                key: uuidv4(),
                Droplink: 'Contact',
            },
            {
                key: uuidv4(),
                Droplink: 'Newsletter',
            },
            {
                key: uuidv4(),
                Droplink: 'LinkedIn',
            },
        ],
    },
];

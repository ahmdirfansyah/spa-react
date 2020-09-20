import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
    <div className="text-center p-10 flex-1 content-center">
        {props.children}
    </div>
);

export { Layout, Nav, Footer };
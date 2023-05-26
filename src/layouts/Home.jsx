import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const Home = () => {
    const headerPart = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <>
            {headerPart || <Navbar></Navbar>}
            <Outlet></Outlet>
            {headerPart || <Footer></Footer>}
        </>
    );
};

export default Home;
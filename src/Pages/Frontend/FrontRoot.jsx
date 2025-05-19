import React from 'react';
import Navbar from '../../Component/Frontend/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Frontend/Footer';
import Contract from '../../Component/Frontend/Contract';

const Root = () => {
    return (
        <>
        
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Contract></Contract>
        <Footer></Footer>
            
        </>
    );
};

export default Root;
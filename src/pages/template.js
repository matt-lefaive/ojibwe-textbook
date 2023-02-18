import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Lesson = () => {
    return (
        <>
            <div class='container-fluid'>
                <div class='row flex-nowrap'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Lesson;
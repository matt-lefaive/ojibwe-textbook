import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';

const Lesson = () => {
    /*useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);*/
    
    useEffect(() => {
        document.title = 'Ojibwe Textbook'
    }, []);

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
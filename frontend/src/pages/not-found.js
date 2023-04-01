import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    useEffect(() => {
        document.title = '404';
    }, []);
    
    return (
        <div className='text-page-container'>
            <div className='button-container' style={{padding: '0'}}>
                <Link className='button' to='/'>Home</Link>
            </div>
            
            <h1>404 Not Found</h1>
            <p>The requested page could not be found on this server. Click <Link to='/'>here</Link> to go back.</p>
        </div>
    )
}

export default NotFound;
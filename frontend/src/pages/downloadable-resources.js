import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DownloadableResources = () => {
    useEffect(() => {
        document.title = 'Downloadable Resources'
    }, []);

    return (
        <div className='text-page-container'>
            <div className='button-container' style={{padding: '0'}}>
                <Link className='button' to='/'>Back</Link>
            </div>
            <h1>Downloadable Resources</h1>
            <p>
                <ul>
                    <li><a href='/ojibwe-textbook/download/Ojibwe_KILN_SRS_lessons_20230116.apkg'>Anki Deck</a></li>
                    <li><a href='/ojibwe-textbook/download/Ojibwe_lessons_SRS_material_web.xlsx'>Word List</a></li>
                </ul>
            </p>
        </div>
    )
}

export default DownloadableResources;

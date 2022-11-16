import React from 'react';

const LessonCard = ({ image, text, url }) => {
    return (
        <a href={url}>
            <div className='card lesson-card'>
                <img src={image} className='card-img-top' alt="..."/>
                <div className='card-body'>
                    <p class="card-text">{text}</p>
                </div>
            </div>
        </a>
    );
}

export default LessonCard;
import React from 'react';

const LessonCard = ({ image, text, url }) => {
    return (
        <a href={url}>
            <div className='card lesson-card'>
                <div className='lesson-card-image'>
                    {image}
                </div>
                <div className='card-body'>
                    <p class="card-text">{text}</p>
                </div>
            </div>
        </a>
    );
}

export default LessonCard;
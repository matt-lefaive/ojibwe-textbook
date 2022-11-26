import React from 'react';

const Title = ({ lesson, text }) => {
    return (
        
        <div className='lesson-title-container'>
            <div className='lesson-circle'>
                {lesson}
            </div>
            <div className='lesson-title'>
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default Title;
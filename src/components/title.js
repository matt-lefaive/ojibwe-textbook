import React from 'react';

const Title = ({ lesson, text, accent }) => {
    return (
        
        <div className='lesson-title-container'>
            <div className='lesson-circle' style={{border: `5px solid ${accent}`}}>
                {lesson}
            </div>
            <div className='lesson-title'>
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default Title;
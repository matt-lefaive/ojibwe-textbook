import React from 'react';

const DialoguePlayer = ({ src, title }) => {
    const HOME_URL = 'https://ciel.utsc.utoronto.ca/ojibwe-textbook';
    
    return (
        <div>
            <audio controls>
                <source src={HOME_URL + src} type='audio/mpeg'/>
                Your browser does not support the audio element
            </audio>
        </div>
    )
}

export default DialoguePlayer;
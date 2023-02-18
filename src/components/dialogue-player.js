import React from 'react';

const DialoguePlayer = ({ src, title }) => {
    return (
        <div>
            <audio controls>
                <source src={src} type='audio/mpeg'/>
                Your browser does not support the audio element
            </audio>
        </div>
    )
}

export default DialoguePlayer;
import React from 'react';

const DialoguePlayer = ({ src }) => {
    return (
        <audio controls>
            <source src={src} type='audio/mpeg'/>
            Your browser does not support the audio element
        </audio>
    )
}

export default DialoguePlayer;
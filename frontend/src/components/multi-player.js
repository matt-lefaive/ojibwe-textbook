import React from 'react';
import DialoguePlayer from './dialogue-player';

const MultiPlayer = ({ srcs, titles }) => {
    return (
        <div style={{maxWidth: '340px'}}>
            {srcs.map((_, i) => (
                <div style={{display: 'flex'}}>
                    <div style={{flexGrow: 1, textAlign: 'right'}}>
                        {titles[i]}:
                    </div>
                    <div style={{flexGrow: 0}}>
                        <DialoguePlayer src={srcs[i]} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MultiPlayer;
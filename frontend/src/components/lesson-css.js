import React from 'react';

const LessonCSS = ({ main, accent }) => {
    const css = `
        main strong {
            color: ${main};
        }
        
        main em {
            color: ${accent};
        }

        main a {
            color: ${accent};
        }

        main a:hover {
            color: ${main};
        }

        .lesson-circle {
            border: 5px solid ${accent};
        }

        .next-button:hover {
            background-color: ${main};
        }

        .prev-button:hover {
            background-color: ${main};
        }

        .home-button:hover {
            background-color: ${main};
        }
    `;

    return <style>{css}</style>;
}

export default LessonCSS;
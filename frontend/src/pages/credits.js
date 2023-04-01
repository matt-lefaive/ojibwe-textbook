import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Credits = () => {
    useEffect(() => {
        document.title = 'Credits & Contact';
    }, []);
    
    return (
        <div className='text-page-container'>
            <div className='button-container' style={{padding: '0'}}>
                <Link className='button' to='/'>Back</Link>
            </div>
            
            <h1>Credits & Contact</h1>

            <p>This is course has been funded by a SSHRC Partnership Development Grant between the Rotman Research Institute at Baycrest Hospital, the University of Toronto, and the Kingston Indigenous Languages Nest in Kingston. The course is currently undergoing evaluation with a group of adult learners in Kingston, but we are pleased to make it available online to learners of Ojibwe from all over. If you are using it, we would love to hear from you and learn about your experience with it.</p>
 
            <p><b>Principal investigator / course author:</b> Jed Meltzer
            <br/><b>Course contributions:</b> Perry Bebamash
            <br/><b>Additional Editing:</b> Gordon Jourdain, Michael Sullivan
            <br/><b>Academic Collaborators:</b> Juvenal Ndayiragije, Lindsay Morcom, Marie-Odile Junker, Inge Genee, John-Paul Chalykoff, Callie Hill, Maureen Buchanan, Conor Quinn.</p>
  
            <p>We welcome feedback on the course. It is a work in progress and certainly contains mistakes. To report a mistake, ask a question, make a suggestion, or anything else, please contact:</p>
  
            <p>Jed Meltzer, Ph.D.
            <br/>Rotman Research Institute, Baycrest Hospital
            <br/><a href="mailto:jmeltzer@research.baycrest.org">jmeltzer@research.baycrest.org</a>
            <br/>416-785-2500 ext. 2117</p>
        </div>
    )
}

export default Credits;
import React from 'react';

const PageButtons = ({ prev, next }) => {
    if (!prev) {
        return (
            <div className='page-button-container next-only'>
                <a className='next-button' href={next.href}>{next.text}</a>
            </div>
        )
    } else if (!next) {
        return (
            <div className='page-button-container'>
                <a className='prev-button' href={prev.href}>{prev.text}</a>
            </div>
        )
    } else {
        return (
            <div className='page-button-container'>
                <a className='prev-button' href={prev.href}>{prev.text}</a>
                <a className='next-button' href={next.href}>{next.text}</a>
            </div>
        )
    }
}

export default PageButtons;
import React from 'react';
import { Link } from 'react-router-dom'

const PageButtons = ({ prev, next }) => {
    if (!prev) {
        return (
            <div className='page-button-container next-only'>
                <Link className='next-button' to={next.href}>{next.text} ⎯→</Link>
            </div>
        )
    } else if (!next) {
        return (
            <div className='page-button-container'>
                <Link className='prev-button' to={prev.href}>← {prev.text}</Link>
            </div>
        )
    } else {
        return (
            <div className='page-button-container'>
                <Link className='prev-button' to={prev.href}>← {prev.text}</Link>
                <Link className='next-button' to={next.href}>{next.text} →</Link>
            </div>
        )
    }
}

export default PageButtons;
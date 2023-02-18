import React from 'react';
import { redirect } from 'react-router-dom';

const Sidebar = ({ links, background }) => {
    return (
        <div id='sidebar' class='collapse collapse-horizontal show sticky' style={{backgroundColor: background, height: '100%'}}>
            <div id='sidebar-nav' class='list-group list-group-flush border-0 rounder-0 text-sm-start min-vh-100'>
                {links.map((x, _) => {
                    if (x.href) { // Regular Link
                        return (
                            <div style={{display: 'flex', marginBottom: '8px'}}>
                                <div className='bullet'>•</div>
                                <div style={{marginLeft: '1em', marginBottom: '4px'}}>
                                    <a
                                        key={x.title}
                                        href={x.href}
                                        class='sidebar-link'
                                    >
                                        {x.title}
                                    </a>
                                </div>
                            </div>
                            
                        )
                    } else if (x.title) {
                        return (
                            <div
                                key={x.title}
                                class='sidebar-text'>
                                {x.title}
                            </div>
                        );
                    } else {
                        return (
                            <div
                                key={_}
                                class='sidebar-divider'>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Sidebar;
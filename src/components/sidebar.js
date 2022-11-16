import React from 'react';

const Sidebar = ({ links, background }) => {
    return (
        <div id='sidebar' class='collapse collapse-horizontal show sticky' style={{backgroundColor: background, height: '100%'}}>
            <div id='sidebar-nav' class='list-group list-group-flush border-0 rounder-0 text-sm-start min-vh-100'>
                {links.map((x, _) => {
                    if (x.href) { // Regular Link
                        return (
                            <a
                                key={x.title}
                                href={x.href}
                                class='sidebar-link'
                                style={{backgroundColor: background}}>
                                {x.title}
                            </a>
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
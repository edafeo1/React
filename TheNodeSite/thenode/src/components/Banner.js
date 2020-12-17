import React from 'react'

function Banner({children,title,Subtitle}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{Subtitle}</p>
            {children}
        </div>
    )
}

export default Banner;


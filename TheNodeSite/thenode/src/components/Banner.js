import React from 'react'

function Banner({children,title,Subtitle,classss}) {
    return (
        <div className={classss}>
            <h1>{title}</h1>
            <div></div>
            <p>{Subtitle}</p>
            {children}
        </div>
    )
}

export default Banner;


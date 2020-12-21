import React from 'react'

function Banner({children,title,Subtitle,classss}) {
    return (
        <div className={classss}>
            <h1>{title}</h1>
            <div></div>
            <h4>{Subtitle}</h4>
            <p>{children}</p>
        </div>
    )
}

export default Banner;


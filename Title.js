import React from 'react'

export default function Title({classes, text}){
    
    return(
        <div>
            <p className={!classes ? "title text_center m-t4" : classes}>{!text ? "Title" : text}</p>
        </div>
    )
}
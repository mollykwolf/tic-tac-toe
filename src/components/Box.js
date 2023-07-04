import React from 'react'

import "./Box.css"

export const Box = ({ value, onClick} ) => {
    let style;
    if (value === null) {
        style = 'box';
    } else if (value === 'x') {
        style = 'box x';
    } else {
        style = 'box o';
    }
    // const style = value === "X" ? "box x" : "box o";

    return (
        <button className={style} onClick={onClick}> {value} </button>
    )
}
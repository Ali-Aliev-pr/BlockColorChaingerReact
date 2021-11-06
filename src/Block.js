import React from 'react';

function Block(props) {

    const style = {
        width: 200,
        height: 200,
        backgroundColor: props.bgcolor
    }

    return (
        <div style={style}></div>
    )
}

export default Block;
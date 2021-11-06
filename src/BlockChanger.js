import React from 'react';

function BlockChainger(props) {
    return (
        <div>
            <input onChange={(e)=>props.handler(e.target.value)}/>
        </div>
    )
}

export default BlockChainger;
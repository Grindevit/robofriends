import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{
            overflow: 'scroll',
            border: '1px solid black',
            height: 'calc(100vh - 203px)'
        }}>
            {props.children}
        </div>
    )
}

export default Scroll;
import React from 'react';

let style = {border: '1px solid grey'}

const Action = (props) => (
    <div>
        <button style={style} 
        onClick={props.handlePick} disabled={!props.hasOptions}>
            What should I do?
        </button>
    </div>
);

export default Action;
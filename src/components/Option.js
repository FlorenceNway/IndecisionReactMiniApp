import React from 'react';

let style = {border: '1px solid grey'}
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)}
            } //not direct function call, create event function so that can pass the argument(option)
                    style={style}>
                X
            </button>
        </div>
    )
}

export default Option;
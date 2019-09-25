import React from 'react';

const Option = (props) => {
    return (
        <div className='option'>
            <p className='option__text'>{props.count}. {props.optionText}</p>
            <button className='button button--link'
                onClick={(e) => {
                props.handleDeleteOption(props.optionText)}
            } //not direct function call, create event function so that can pass the argument(option)
                    >
                Remove
            </button>
        </div>
    )
}

export default Option;
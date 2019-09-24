import React from 'react';
import Option from './Option';

let style = {border: '1px solid grey'}

class Options extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.options.length === 0 && <p>Please add an option to get started.</p>}
                {
                  this.props.options.map((option)=>
                      <Option key={option} optionText={option} 
                            handleDeleteOption={this.props.handleDeleteOption}
                      />
                  )  
                }
                <button onClick={this.props.handleDeleteOptions} 
                style={style}>Remove All</button>
            </div>
        )
    }
}

export default Options;
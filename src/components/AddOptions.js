import React from 'react';

let style = {border: '1px solid grey'}

export default class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        //trim from both sides of string '   hello  '
        const error = this.props.handleAddOption(option)


           this.setState(() => ({error})) 
        if(!error) {
            e.target.elements.option.value = '';
        }     
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' style={style}/>
                    <button style={style}>Add Option</button>
                </form>
                
            </div>
        )
    }
}

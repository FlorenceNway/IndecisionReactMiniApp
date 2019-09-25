import React from 'react';
import Header from './Header';
import AddOptions from './AddOptions';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: props.options,
            selectedOption: undefined
        }
        
    }
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }
    handleDeleteOption = (optiontoRemove) => {
        this.setState((prevState)=> ({
            options: prevState.options.filter((option) => {
                return optiontoRemove !== option; //it will give the array which doesn't include optiontoRemove
            })
        }));
    }
//When click 'what should I do button'
    handlePick = () => {
        const randompick = Math.floor(Math.random(this.state.options) * this.state.options.length);//want to know index and limit the index not to beyond length of array
        const option = this.state.options[randompick];
        this.setState(() =>({
            selectedOption: option
        }))
    }
    //modal box , click okay or esc or background
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    //When click 'Add Option button'
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            //check the option is aldy entered
            return 'This option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));  
    }
    

    //fire when component gets first mounted to browser
    componentDidMount() {
        //fetching data
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json); //to retrieve real javascript array back
            if(options){
                this.setState(() => ({options: options}))
            }
        } catch (e) {
            //Do nothing
            console.log(e)
        }
    }
    //fire after the component update or after state/props values changed
    componentDidUpdate(prevProps,prevState) {
        //saving data
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            //save with Json strigify data so that number will not be saved as string
            localStorage.setItem('options', json);
        }
    }
    //fire when component goes away
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    
    render(){
        const title = 'Indecision App'
        const subtitle = 'Put your life in the hands of a computer'
    
        return(
                <div>
                    <Header subtitle={subtitle}/>
                    <div className='container'>
                        <Action hasOptions={this.state.options.length > 0}
                                handlePick = {this.handlePick}/>
                        <div className='widget'>
                            <Options options = {this.state.options} 
                                    handleDeleteOptions={this.handleDeleteOptions}
                                    handleDeleteOption={this.handleDeleteOption}/>
                            <AddOptions handleAddOption={this.handleAddOption}/>
                        </div>    
                                
                    </div>
                    <OptionModal 
                            selectedOption={this.state.selectedOption}
                            handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                </div>
            )
    }
}

IndecisionApp.defaultProps = {
    options: []
}
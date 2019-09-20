let style = {border: '1px solid grey'}

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
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
    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }
    handleDeleteOption(optiontoRemove) {
        this.setState((prevState)=> ({
            options: prevState.options.filter((option) => {
                return optiontoRemove !== option; //it will give the array which doesn't include optiontoRemove
            })
        }));
    }
    handleAddOption(option) {
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
    handlePick() {
        const randompick = Math.floor(Math.random(this.state.options) * this.state.options.length);
        alert(this.state.options[randompick]);
    }
    render(){
        const title = 'Indecision App'
        const subtitle = 'Put your life in the hands of a computer'
    
        return(
                <div>
                    <Header subtitle={subtitle}/>
                    <Action hasOptions={this.state.options.length > 0}
                            handlePick = {this.handlePick}/>
                    <Options options = {this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}/>
                    <AddOptions handleAddOption={this.handleAddOption}/>
                </div>
            )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>      
   )
}

Header.defaultProps = {
    title: 'Indecision'
}
// class Header extends React.Component{
//     render() {
//         return (
//              <div>
//                  <h1>{this.props.title}</h1>
//                  <h2>{this.props.subtitle}</h2>
//              </div>      
//         )
//     }
// }

const Action = (props) => {
        return (
            <div>
                <button style={style} 
                onClick={props.handlePick} disabled={!props.hasOptions}>
                    What should I do?
                </button>
            </div>
        )
}


// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button style={style} 
//                 onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
//                     What should I do?
//                 </button>
//             </div>
//         )
//     }
// }

class Options extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.options.length === 0 && <p>Please add an option toget started</p>}
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

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)}
            } //not direct function call, create event function so that can pass the argument(option)
                    style={style}>
                Remove
            </button>
        </div>
    )
}


class AddOptions extends React.Component {
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
        //    this.setState(()=>{
        //        return {error}
        //    })
           
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

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))

// const app = {
//     title: 'Indecision App',
//     subtitle: 'Pur your life in the hands of a computer',
//     options: ['Thing one', 'Thing two', 'Thing three']

// }

// let style = {border: '1px solid grey'}

// const onFormSubmit = (e) => {
//     e.preventDefault();
//     const option = e.target.elements.option.value;

//     if(option) {
//         app.options.push(option);
//         e.target.elements.option.value ='';
//         render();
//     }  
// }

// const onRemoveAll = () => {
//     app.options = [];
//     render();
// }

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNum];
//     alert(option);
//     console.log(Math.random());
// }

// var appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title ? app.title : ''}</h1>
//             {app.subtitle && <p>{app.subtitle}</p>} 
//             {/* #true && 'use this value' = use this value  */}
//             <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
//             <p>{app.options.length}</p>
//             <button disabled={app.options.length === 0} style={style} onClick={onMakeDecision}>What should I do?</button>
//             <button style={style} onClick={onRemoveAll}>Remove All</button>
//             <ol>
//                 {
//                     app.options.map((option) => {
//                         return <li key={option}>{option}</li>
//                     })
//                 }
//             </ol>
            
//             <form onSubmit={onFormSubmit}>
//                 <input type='text' name='option'style={style}/>
//                 <button style={style}> Add Option</button>
//             </form>
//         </div>
//     );
//     ReactDOM.render(template, appRoot); 
// }

// render();

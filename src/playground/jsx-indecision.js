let style = {border: '1px solid grey'}
class Header extends React.Component{
    render() {
        return (
             <p>
                 This is from Header <br></br>
                 <span>{this.props.title}</span>
            </p>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('Handle Pick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}



class Options extends React.Component {
    constructor(props){
        super();
        this.handleremoveAll = this.handleremoveAll.bind(this);
    }
    handleremoveAll() {
        console.log(this.props.options)
        alert('Remove All')
    }
    render() {
        return (
            <div>
                {
                  this.props.options.map((option)=>
                      <Option key={option} optionText={option} />
                  )  
                }
                <button onClick={this.handleremoveAll}>Remove All</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

class AddOptions extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if(option) {
            alert(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' style={style}/>
                    <button style={style}>Add Option</button>
                </form>
                
            </div>
        )
    }
}

class Indecision extends React.Component {
    render() {
        const title = 'Indecision';
        const options = ['Item one', 'Item two', '3']

        return (
            <div>
                <Header title={title}/>
                <Action/>
                <Options options = {options}/>
                <AddOptions/>
                
            </div>
        )
    }
}


ReactDOM.render(<Indecision/>, document.getElementById('app'));
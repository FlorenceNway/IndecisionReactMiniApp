let buttonstyle = {border: '1px solid grey'}

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            //count: 0
            count: props.count
    
        }
    }
    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10); 
            if(!isNaN(count)){
                this.setState(()=>({count: count}))
            }
        } catch(e) {
            //do nothing
        }
    }
    
    componentDidUpdate(prevProps,prevState){
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
        
    }

    addOne(){
           this.setState((prevState) => {
                return {
                    count: prevState.count + 1
                }
           }) 
            
    }
        
    minusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        }) 
    }        
    
        
    reset(){
        this.setState(() => {
            return {
                count: 0
            }
        }) 
    }       
        
    render(){
        return(
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.addOne} style={buttonstyle}> +1 </button>
                <button onClick={this.minusOne} style={buttonstyle}> -1 </button>
                <button onClick={this.reset} style={buttonstyle}> reset </button>
            </div>
        )
    }
}

//if there is no props passed
Counter.defaultProps = {
    count: 0
}
//<Counter count={-1}/> it will show -1
ReactDOM.render(<Counter/>, document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();  
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count=0;
//     renderCounterApp();
// }

// var appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     // creating new object
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} style={buttonstyle}> +1 </button>
//             <button onClick={minusOne} style={buttonstyle}> -1 </button>
//             <button onClick={reset} style={buttonstyle}> reset </button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, appRoot);
// }
    
// renderCounterApp();

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = { border: '1px solid grey' };

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optiontoRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optiontoRemove !== option; //it will give the array which doesn't include optiontoRemove
                    })
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                //check the option is aldy entered
                return 'This option already exists';
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randompick = Math.floor(Math.random(this.state.options) * this.state.options.length);
            alert(this.state.options[randompick]);
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision App';
            var subtitle = 'Put your life in the hands of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOptions, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
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

};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { style: style,
                onClick: props.handlePick, disabled: !props.hasOptions },
            'What should I do?'
        )
    );
};

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

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                null,
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option,
                        handleDeleteOption: _this3.props.handleDeleteOption
                    });
                }),
                React.createElement(
                    'button',
                    { onClick: this.props.handleDeleteOptions,
                        style: style },
                    'Remove All'
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                } //not direct function call, create event function so that can pass the argument(option)
                , style: style },
            'Remove'
        )
    );
};

var AddOptions = function (_React$Component3) {
    _inherits(AddOptions, _React$Component3);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this4 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this4.handleAddOption = _this4.handleAddOption.bind(_this4);
        _this4.state = {
            error: undefined
        };
        return _this4;
    }

    _createClass(AddOptions, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            //trim from both sides of string '   hello  '
            var error = this.props.handleAddOption(option);
            e.target.elements.option.value = '';

            this.setState(function () {
                return { error: error };
            });
            //    this.setState(()=>{
            //        return {error}
            //    })
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option', style: style }),
                    React.createElement(
                        'button',
                        { style: style },
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

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

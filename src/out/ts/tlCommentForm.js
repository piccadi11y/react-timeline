"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tlUserAvatar_1 = require("./tlUserAvatar");
class Comment_Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { txtInput: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({ txtInput: e.target.value });
    }
    handleClick(e) {
        if (this.state.txtInput !== '') {
            this.props.handleClick('root', this.state.txtInput);
            this.setState({ txtInput: '' });
        }
    }
    render() {
        return (React.createElement("div", { className: 'comment-form' },
            React.createElement(tlUserAvatar_1.default, { username: 'root' }),
            React.createElement("textarea", { placeholder: 'Have your say!', value: this.state.txtInput, onChange: this.handleChange }),
            React.createElement("button", { onClick: this.handleClick })));
    }
}
exports.default = Comment_Form;

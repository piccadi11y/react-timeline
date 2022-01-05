"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
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
        this.props.handleClick('root', this.state.txtInput);
        this.setState({ txtInput: '' });
    }
    render() {
        return (React.createElement("div", { className: 'comment-form' },
            React.createElement("textarea", { value: this.state.txtInput, onChange: this.handleChange }),
            React.createElement("input", { type: 'button', value: '->', onClick: this.handleClick })));
    }
}
exports.default = Comment_Form;

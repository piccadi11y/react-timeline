"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tlData_1 = require("./tlData");
const tlUserAvatar_1 = require("./tlUserAvatar");
class TimelineComment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'comment' },
            React.createElement(tlUserAvatar_1.default, { username: this.props.data.username }),
            React.createElement("div", { className: 'comment-detail' },
                React.createElement("p", { className: 'comment-name' },
                    tlData_1.Assets.users[this.props.data.username].name,
                    " - ",
                    this.props.data.commentDate.toLocaleDateString(),
                    " | ",
                    this.props.data.commentDate.toString()),
                React.createElement("p", { className: 'comment-body' }, this.props.data.commentBody))));
    }
}
exports.default = TimelineComment;

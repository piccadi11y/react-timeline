"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tlComment_1 = require("./tlComment");
class TimelineItem_Comments extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'comment-container' }, this.props.data.comments.map(v => React.createElement(tlComment_1.default, { data: v }))));
    }
}
exports.default = TimelineItem_Comments;

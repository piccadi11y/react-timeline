"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tlComment_1 = require("./tlComment");
const tlCommentForm_1 = require("./tlCommentForm");
class TimelineItem_Comments extends React.Component {
    constructor(props) {
        super(props);
        this.createComment = this.createComment.bind(this);
        this.state = { userComments: [] };
    }
    createComment(username, commentBody) {
        console.log(username, commentBody);
        this.setState({ userComments: this.state.userComments.concat([{ username: username, commentBody: commentBody, commentDate: new Date() }]) });
    }
    render() {
        let comments = this.props.data.comments.concat(this.state.userComments);
        return (React.createElement("div", null,
            React.createElement("div", { className: 'comment-container' }, comments.map(v => React.createElement(tlComment_1.default, { data: v }))),
            React.createElement(tlCommentForm_1.default, { handleClick: this.createComment })));
    }
}
exports.default = TimelineItem_Comments;

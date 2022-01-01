"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tlData_1 = require("./tlData");
class TimelineComment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement("p", null,
            tlData_1.Assets.users[this.props.data.username].name,
            ": ",
            this.props.data.commentBody);
    }
}
exports.default = TimelineComment;

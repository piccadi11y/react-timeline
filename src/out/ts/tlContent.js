"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class TimelineItem_Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'content-container' },
            React.createElement("h1", null, this.props.data.title)));
    }
}
exports.default = TimelineItem_Content;

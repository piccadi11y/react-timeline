"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class TimelineItem_Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'content-container' },
            React.createElement("h1", { className: 'content-title' }, this.props.data.title),
            React.createElement("a", { className: 'content-link', href: this.props.data.url },
                React.createElement("img", { className: 'content-img', src: this.props.data.imgURL })),
            React.createElement("h3", { className: 'content-blurb' }, this.props.data.blurb),
            React.createElement("p", { className: 'content-date' }, this.props.data.date.toLocaleDateString())));
    }
}
exports.default = TimelineItem_Content;

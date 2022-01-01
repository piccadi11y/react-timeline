"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tlComments_1 = require("./tlComments");
const tlContent_1 = require("./tlContent");
;
class TimelineItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(tlContent_1.default, { data: this.props.data.content }),
            React.createElement(tlComments_1.default, { data: this.props.data.comments })));
    }
}
exports.default = TimelineItem;

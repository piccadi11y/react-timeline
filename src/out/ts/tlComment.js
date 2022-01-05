"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tlData_1 = require("./tlData");
const tlUserAvatar_1 = require("./tlUserAvatar");
const MS_IN_DAY = 86400000;
const DAYS_OF_WEEK = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat'
];
class TimelineComment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let date = this.props.data.commentDate;
        let now = new Date();
        let today = now;
        today.setHours(0, 0, 0, 1);
        let dateToDisplay;
        if (date.toLocaleDateString() === now.toLocaleDateString())
            dateToDisplay = `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}h`;
        else if (date.getTime() >= today.getTime() - MS_IN_DAY * 6)
            dateToDisplay = DAYS_OF_WEEK[date.getDay()];
        else
            dateToDisplay = date.toLocaleDateString();
        return (React.createElement("div", { className: 'comment' },
            React.createElement(tlUserAvatar_1.default, { username: this.props.data.username }),
            React.createElement("div", { className: 'comment-detail' },
                React.createElement("div", { className: 'comment-detail-bg' }),
                React.createElement("p", { className: 'comment-name' },
                    tlData_1.Assets.users[this.props.data.username].name,
                    " - ",
                    dateToDisplay),
                React.createElement("p", { className: 'comment-body' }, this.props.data.commentBody))));
    }
}
exports.default = TimelineComment;

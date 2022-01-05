"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tlData_1 = require("./tlData");
class Comment_UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'user-avatar-container' },
            React.createElement("img", { src: tlData_1.Assets.users[this.props.username].url, alt: 'pfp', className: 'user-avatar' })));
    }
}
exports.default = Comment_UserInfo;

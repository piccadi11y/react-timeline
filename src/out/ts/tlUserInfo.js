"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tlData_1 = require("./tlData");
class Comment_UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'user-info' },
            React.createElement("img", { src: tlData_1.Assets.users[this.props.username].url, alt: 'pfp', className: 'user-avatar' }),
            React.createElement("p", { className: 'user-name' },
                tlData_1.Assets.users[this.props.username].name,
                ":"),
            React.createElement("p", null,
                this.props.postDate.toLocaleDateString(),
                " | ",
                this.props.postDate.toString())));
    }
}
exports.default = Comment_UserInfo;

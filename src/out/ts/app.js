"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tlData_1 = require("./tlData");
const tlItem_1 = require("./tlItem");
const App = (props) => {
    return (React.createElement("div", { className: 'timeline-container' }, tlData_1.Assets.data.map(v => React.createElement(tlItem_1.default, { data: v }))));
};
exports.default = App;

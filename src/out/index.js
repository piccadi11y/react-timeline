"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const app_1 = require("./ts/app");
console.log('hello world');
ReactDOM.render(React.createElement(app_1.default, { name: 'Toby M.' }), document.getElementsByTagName('main')[0]);

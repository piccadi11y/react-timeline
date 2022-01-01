"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assets = void 0;
const testd = {
    title: 'This is an announcement',
    blurb: 'and this is a little bit of detail about the announcement'
};
const testc = {
    temp: 'test comment string',
    comments: [
        { username: 'jimbob5', commentBody: 'test comment string 2' },
        { username: 'jimbob5', commentBody: 'test comment 2 string' }
    ]
};
var Assets;
(function (Assets) {
    Assets.users = {
        'jimbob5': { name: 'Jimmy Claus', url: '../../assets/truck.jpg' },
        'SallyCat92': { name: 'Sally Baker', url: '../../assets/cheese.jpg' },
    };
    let usernames;
    (function (usernames) {
        usernames["JIMBOB5"] = "jimbob5";
        usernames["SALLYCAT92"] = "SallyCat92";
    })(usernames = Assets.usernames || (Assets.usernames = {}));
    Assets.data = [
        {
            content: testd,
            comments: testc
        },
        {
            content: testd,
            comments: testc
        },
        {
            content: {
                title: 'Chips are back in!',
                blurb: 'The old trend taking 2022 by storm'
            },
            comments: {
                temp: '',
                comments: [
                    { username: usernames.JIMBOB5, commentBody: 'boooo' },
                    { username: usernames.SALLYCAT92, commentBody: 'tasty!' }
                ]
            }
        }
    ];
})(Assets = exports.Assets || (exports.Assets = {}));

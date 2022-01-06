"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assets = void 0;
const testd = {
    title: 'This is an announcement',
    blurb: 'and this is a little bit of detail about the announcement',
    imgURL: './assets/announcement.jpg',
    url: '',
    date: new Date()
};
const testc = {
    temp: 'test comment string',
    comments: [
        { username: 'jimbob5', commentBody: 'test comment string 2', commentDate: new Date() },
        { username: 'jimbob5', commentBody: 'test comment 2 string', commentDate: new Date() }
    ]
};
var Assets;
(function (Assets) {
    Assets.users = {
        'jimbob5': { name: 'Jimmy Claus', url: './assets/truck.jpg' },
        'SallyCat92': { name: 'Sally Baker', url: './assets/cheese.jpg' },
        'root': { name: 'Me', url: './assets/cat.jpg' }
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
            content: {
                title: 'Chips are back in!',
                blurb: 'The old trend taking 2022 by storm',
                imgURL: './assets/chips.jpg',
                url: '',
                date: new Date(2021, 11, 22, 12, 15, 22)
            },
            comments: {
                temp: '',
                comments: [
                    { username: usernames.JIMBOB5, commentBody: 'boooo', commentDate: new Date(2021, 11, 23, 9, 52, 53) },
                    { username: usernames.SALLYCAT92, commentBody: 'tasty!', commentDate: new Date(2021, 11, 30, 14, 12, 35) }
                ]
            }
        }
    ];
})(Assets = exports.Assets || (exports.Assets = {}));

import { TimelineItem_Data } from "./tlItem"
import { TimelineItem_ContentData } from "./tlContent";
import { TimelineItem_CommentData } from "./tlComments";
import { ICommentData } from "./tlComment";
import { IUserData } from "./tlUserAvatar";

const testd: TimelineItem_ContentData = {
    title: 'This is an announcement',
    blurb: 'and this is a little bit of detail about the announcement',
    imgURL: './assets/announcement.jpg',     // https://www.zola.com/expert-advice/how-to-announce-your-engagement
    url: '',
    date: new Date()
}

const testc: TimelineItem_CommentData = {
    temp: 'test comment string',
    comments: [
        {username: 'jimbob5', commentBody: 'A functional comment section, how could it be?', commentDate: new Date()},
        {username: 'spideymon', commentBody: 'If only they\'d post actual content now, might actually bring me back.', commentDate: new Date()},
        {username: 'scifiguy', commentBody: 'Why must the month in a date object start at 0?..', commentDate: new Date()}
    ]
};


export namespace Assets {
    export const users: {[key: string]: IUserData} = {
        'jimbob5': {name: 'Jimmy Claus', url: './assets/truck.jpg'},       // src: https://www.newyorker.com/news/letter-from-the-southwest/old-trucks-for-new-money
        'SallyCat92': {name: 'Sally Baker', url: './assets/cheese.jpg'},    // src: https://www.hsph.harvard.edu/nutritionsource/cheese/
        'root': {name: 'Me', url: './assets/cat.jpg'},
        'spideymon': {name: 'Tobey Matthews', url: './assets/spoyder.jpg'},     // src: https://www.livescience.com/jumping-spiders     // not a typo
        'tigerchick07': {name: 'Amelia Sun', url: './assets/tiger.jpg'},        // src: https://www.britannica.com/animal/tiger
        'scifiguy': {name: 'Eric Crichton', url: './assets/moya.jpg'}           // src: https://news.toyark.com/2019/11/22/farscape-moya-leviathan-by-chronicle-collectibles-371654
    }
    
    export enum usernames {
        JIMBOB5 = 'jimbob5',
        SALLYCAT92 = 'SallyCat92',
        SPIDEYMON = 'spideymon',
        TIGERCHICK07 = 'tigerchick07',
        SCIFIGUY = 'scifiguy'
    }

    export const data: TimelineItem_Data[] = [
        {
            content: testd,
            comments: testc
        },
        {
            content: {
                title: '10 tips for managing pesky flies',
                blurb: 'Top tips and tricks for delaing with them critters that get in through your doors and windows.',
                imgURL: './assets/fly.jpg',
                url: '',        // https://www.koppert.com/challenges/flies/house-fly/
                date: new Date(2022, 0, 4, 11, 11, 11)
            },
            comments: {
                temp: '',
                comments: [
                    {username: usernames.SPIDEYMON, commentBody: 'Nom', commentDate: new Date(2022, 0, 4, 11, 59, 1)}
                ]
            }
        },
        {
            content: {
                title: 'Chips are back in!',
                blurb: 'The old trend set to take 2022 by storm',
                imgURL: './assets/chips.jpg',     // https://www.independent.co.uk/news/health/eating-chips-twice-week-death-double-chance-risk-health-diet-carbohydrates-deep-fry-a7790996.html
                url: '',
                date: new Date(2021, 11, 22, 12, 15, 22)
            },
            comments: {
                temp: '',
                comments: [
                    {username: usernames.JIMBOB5, commentBody: 'boooo, who even likes potato?', commentDate: new Date(2021, 11, 23, 9, 52, 53)},
                    {username: usernames.SALLYCAT92, commentBody: 'tasty!', commentDate: new Date(2021, 11, 26, 14, 12, 35)},
                    {username: usernames.TIGERCHICK07, commentBody: 'What a time to be alive..', commentDate: new Date(2021, 11, 29, 17, 5, 58)}
                ]
            }
        },
        {
            content: {
                title: 'The James Webb Space Telescope explained (space.com)',
                blurb: 'An in-depth explanation of the JWST with pictures. Image credit: Northrop Grumman',
                imgURL: './assets/JWST.png',
                url: 'https://www.space.com/james-webb-space-telescope-mission-explained',
                date: new Date(2021, 11, 20, 0, 0, 1)
            },
            comments: {
                temp: '',
                comments: [
                    {username: usernames.SCIFIGUY, commentBody: 'THIS IS SOOOOOO EXCITING!!!', commentDate: new Date(2021, 11, 20, 6, 21, 5)},
                    {username: usernames.JIMBOB5, commentBody: 'To lazy to write there own content?!?!', commentDate: new Date(2021, 11, 20, 10, 11, 3)},
                    {username: usernames.TIGERCHICK07, commentBody: 'That\'s a little rich coming from you there Jimbo..', commentDate: new Date(2021, 11, 20, 10, 15, 33)},
                    {username: usernames.SALLYCAT92, commentBody: 'alwayz ready to pounce aye tiger lol', commentDate: new Date(2021, 11, 20, 10, 32, 42)},
                    {username: usernames.JIMBOB5, commentBody: 'wat?', commentDate: new Date(2021, 11, 20, 13, 35, 28)}
                ]
            }
        }
    ]

}

// add additional users/content pre-release
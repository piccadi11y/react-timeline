import { TimelineItem_Data } from "./tlItem"
import { TimelineItem_ContentData } from "./tlContent";
import { TimelineItem_CommentData } from "./tlComments";
import { ICommentData } from "./tlComment";
import { IUserData } from "./tlUserInfo";

const testd: TimelineItem_ContentData = {
    title: 'This is an announcement',
    blurb: 'and this is a little bit of detail about the announcement'
}

const testc: TimelineItem_CommentData = {
    temp: 'test comment string',
    comments: [
        {username: 'jimbob5', commentBody: 'test comment string 2'},
        {username: 'jimbob5', commentBody: 'test comment 2 string'}
    ]
};


export namespace Assets {
    export const users: {[key: string]: IUserData} = {
        'jimbob5': {name: 'Jimmy Claus', url: '../../assets/truck.jpg'},       // src: https://www.newyorker.com/news/letter-from-the-southwest/old-trucks-for-new-money
        'SallyCat92': {name: 'Sally Baker', url: '../../assets/cheese.jpg'},    // src: https://www.hsph.harvard.edu/nutritionsource/cheese/
    }
    
    export enum usernames {
        JIMBOB5 = 'jimbob5',
        SALLYCAT92 = 'SallyCat92'
    }

    export const data: TimelineItem_Data[] = [
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
                    {username: usernames.JIMBOB5, commentBody: 'boooo'},
                    {username: usernames.SALLYCAT92, commentBody: 'tasty!'}
                ]
            }
        }
    ]

}

import * as React from 'react';
import { Assets } from './tlData';
import Comment_UserInfo from './tlUserAvatar';

const MS_IN_DAY: number = 86400000;
const DAYS_OF_WEEK: string[] = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat'
]

export interface ICommentData {
    username: string;
    commentBody: string;
    commentDate: Date;
}

interface IProps {
    data: ICommentData;
}

export default class TimelineComment extends React.Component <IProps> {
    constructor (props: IProps) {
        super(props);
    }

    render () {
        let date: Date = this.props.data.commentDate;
        let now: Date = new Date();
        let today: Date = now;
        today.setHours(0,0,0,1);
        let dateToDisplay: string;

        if (date.toLocaleDateString() === now.toLocaleDateString()) dateToDisplay = `${date.getHours()<10?'0'+date.getHours():date.getHours()}${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}h`;
        else if (date.getTime() >= today.getTime() - MS_IN_DAY * 6) dateToDisplay = DAYS_OF_WEEK[date.getDay()];
        else dateToDisplay = date.toLocaleDateString();

        return(
            <div className='comment'>
                <Comment_UserInfo username={this.props.data.username}/>
                <div className='comment-detail'>
                    <div className='comment-detail-bg'></div>
                    <p className='comment-name'>{Assets.users[this.props.data.username].name} - {dateToDisplay}</p>
                    <p className='comment-body'>{this.props.data.commentBody}</p>
                </div>
            </div>
        );
    }
}
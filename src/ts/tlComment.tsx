import * as React from 'react';
import { Assets } from './tlData';
import Comment_UserInfo from './tlUserAvatar';

const MS_IN_DAY: number = 86400000;
const DAYS_OF_WEEK: string[] = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
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
        // return <p>{Assets.users[this.props.data.username].name}: {this.props.data.commentBody}</p>
        let date: Date = this.props.data.commentDate;
        let now: Date = new Date();
        let dateToDisplay: string;

        if (date.toLocaleDateString() === now.toLocaleDateString()) dateToDisplay = `${date.getHours()}${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}h`;
        else if (date.getTime() >= now.getTime() - MS_IN_DAY * 7) dateToDisplay = DAYS_OF_WEEK[date.getDay()];
        else dateToDisplay = date.toLocaleDateString();

        return(
            <div className='comment'>
                <Comment_UserInfo username={this.props.data.username}/>
                <div className='comment-detail'>
                    <p className='comment-name'>{Assets.users[this.props.data.username].name} - {dateToDisplay}</p>
                    <p className='comment-body'>{this.props.data.commentBody}</p>
                </div>
            </div>
        );
    }
}
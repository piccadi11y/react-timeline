import * as React from 'react';
import TimelineComment, { ICommentData } from './tlComment';

export interface TimelineItem_CommentData {
	temp: string;
    comments: ICommentData[];
}

interface IProps {
    data: TimelineItem_CommentData;
}

export default class TimelineItem_Comments extends React.Component <IProps> {
    constructor (props: IProps) {
        super(props);
    }

    render () {
        return (
            // <p>{this.props.data.temp}</p>
            // <TimelineComment data={this.props.data.comments}/>
            <div className='comment-container'>{this.props.data.comments.map(v => <TimelineComment data={v} />)}</div>
        );
    }
}
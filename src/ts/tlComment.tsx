import * as React from 'react';
import { Assets } from './tlData';
import Comment_UserInfo from './tlUserAvatar';

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
        return(
            <div className='comment'>
                <Comment_UserInfo username={this.props.data.username}/>
                <div className='comment-detail'>
                    <p className='comment-name'>{Assets.users[this.props.data.username].name} - {this.props.data.commentDate.toLocaleDateString()} | {this.props.data.commentDate.toString()}</p>
                    <p className='comment-body'>{this.props.data.commentBody}</p>
                </div>
            </div>
        );
    }
}
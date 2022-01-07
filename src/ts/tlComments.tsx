import * as React from 'react';
import TimelineComment, { ICommentData } from './tlComment';
import Comment_Form from './tlCommentForm';

export interface TimelineItem_CommentData {
	temp: string;
    comments: ICommentData[];
}

interface IProps {
    data: TimelineItem_CommentData;
}

interface IState {
    userComments: ICommentData[];
}

export default class TimelineItem_Comments extends React.Component <IProps, IState> {
    constructor (props: IProps) {
        super(props);

        this.createComment = this.createComment.bind(this);

        this.state = {userComments: []};
    }

    createComment (username: string, commentBody: string): void {
        console.log(username, commentBody);

        this.setState({userComments: this.state.userComments.concat([{username: username, commentBody: commentBody, commentDate: new Date()}])});
    }

    render () {
            let comments: ICommentData[] = this.props.data.comments.concat(this.state.userComments);
        return (
            <div>
                <div className='comment-container'>
                    {comments.map(v => <TimelineComment data={v} />)}
                </div>
                <Comment_Form handleClick={this.createComment}/>
            </div>
        );
    }
}
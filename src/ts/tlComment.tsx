import * as React from 'react';
import { Assets } from './tlData';

export interface ICommentData {
    username: string;
    commentBody: string;
}

interface IProps {
    data: ICommentData;
}

export default class TimelineComment extends React.Component <IProps> {
    constructor (props: IProps) {
        super(props);
    }

    render () {
        return <p>{Assets.users[this.props.data.username].name}: {this.props.data.commentBody}</p>
    }
}
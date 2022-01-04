import * as React from 'react';
import { Assets } from './tlData';

export interface IUserData {
    name: string;
    url: string;
}

interface IProps {
    username: string;
}

export default class Comment_UserInfo extends React.Component <IProps> {
    constructor (props: IProps) {
        super(props);
    }

    render () {
        return (
            <div className='user-avatar-container'>
                <img src={Assets.users[this.props.username].url} alt='pfp' className='user-avatar'/>
            </div>
        );
    }
}
import * as React from 'react';

export interface IUserData {
    name: string;
    url: string;
}

interface IProps {

}

export default class Comment_UserInfo extends React.Component <IProps> {
    constructor (props: IProps) {
        super(props);
    }

    render () {
        return (
            <p></p>
        );
    }
}
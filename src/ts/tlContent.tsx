import * as React from 'react';

export interface TimelineItem_ContentData {
	title: string;
    blurb: string;
}

interface IProps {
    data: TimelineItem_ContentData;
}

export default class TimelineItem_Content extends React.Component <IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render () {
        return (
            <div className='content-container'>
                <h1>{this.props.data.title}</h1>
            </div>
        );
    }
}
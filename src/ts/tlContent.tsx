import * as React from 'react';

export interface TimelineItem_ContentData {
	title: string;
    blurb: string;
    imgURL: string;
    url: string;
    date: Date;
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
                <h1 className='content-title'>{this.props.data.title}</h1>
                <a className='content-link' href={this.props.data.url} target='_blank'>
                    <img className='content-img' src={this.props.data.imgURL} />
                </a>
                <h3 className='content-blurb'>{this.props.data.blurb}</h3>
                <p className='content-date'>{this.props.data.date.toLocaleDateString()}</p>
            </div>
        );
    }
}
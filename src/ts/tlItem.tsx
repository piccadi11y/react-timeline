import * as React from 'react';
import TimelineItem_Comments, {TimelineItem_CommentData} from './tlComments';
import TimelineItem_Content, {TimelineItem_ContentData} from './tlContent';


export interface TimelineItem_Data {
	content: TimelineItem_ContentData;
	comments: TimelineItem_CommentData;
};

interface IProps {
	data: TimelineItem_Data;
}

export default class TimelineItem extends React.Component <IProps> {
	constructor (props: IProps) {
		super(props);
	}

	render () {
		return (
			<div className='timeline-item'>
				<TimelineItem_Content data={this.props.data.content}/>
				<TimelineItem_Comments data={this.props.data.comments}/>
			</div>
		)
	}
}
import * as React from 'react';
import { Assets } from './tlData';
import TimelineItem from './tlItem';

interface IProps {
	name: string;
}

const App: React.FC <IProps> = (props: IProps) => {
	return (
		<div>{Assets.data.map(v => <TimelineItem data={v} />)}</div>
	);
}

export default App;

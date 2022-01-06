import * as React from 'react'
import Comment_UserInfo from './tlUserAvatar';

interface IProps {
    handleClick: Function;
}

interface IState {
    txtInput: string;
}

export default class Comment_Form extends React.Component <IProps, IState> {
    constructor (props: IProps) {
        super(props);

        this.state = {txtInput: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange (e) {
        this.setState({txtInput: e.target.value});
    }

    handleClick (e) {
        if (this.state.txtInput !== '') {
            this.props.handleClick('root', this.state.txtInput);
            this.setState({txtInput: ''});
        }
    }

    render () {
        return(
            <div className='comment-form'>
                <Comment_UserInfo username='root'/>
                <textarea placeholder='Have your say!' value={this.state.txtInput} onChange={this.handleChange} />
                {/* <input type='button' value='->' onClick={this.handleClick} /> */}
                {/* <button onClick={this.handleClick}>{'->'}</button> */}
                {/* <button onClick={this.handleClick}>{'\u2192'}</button> */}
                <button onClick={this.handleClick}></button>
            </div>
        );
    }
}
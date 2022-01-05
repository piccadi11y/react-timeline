import * as React from 'react'

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
        this.props.handleClick('root', this.state.txtInput);
        this.setState({txtInput: ''});
    }

    render () {
        return(
            <div className='comment-form'>
                <textarea value={this.state.txtInput} onChange={this.handleChange} />
                <input type='button' value='->' onClick={this.handleClick} />
            </div>
        );
    }
}
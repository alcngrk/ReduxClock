import React from 'react';
import {connect} from 'react-redux';
import {changeTime} from '../actions/changeTime';

class Clock extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.cycle = setInterval(() => {
            this.props.changeTime(this.props.elapsedTime);
        }, 
        1000);
    }

    render(){
        if(this.props.elapsedTime){
            console.log('Rerendered.');
        }
        return(
        <div>
            <p>It is {this.props.currentTime.toLocaleTimeString()}.</p>
            <p>{this.props.elapsedTime} seconds passed since first render.</p>
        </div>
        );
    } 
}

function mapStateToProps(state){
    return { 
        currentTime: state.time.time,
        elapsedTime: state.time.elapsedTime,
    };
}

export default connect (mapStateToProps, {
    changeTime,
})(Clock);
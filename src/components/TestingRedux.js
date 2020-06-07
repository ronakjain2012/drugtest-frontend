import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button } from "react-bootstrap";
import * as TestingActions from './../store/Testing/actions'


// This maps the state to the property of the component

function mapStateToProps(state) {
    return {
        counterValue: state.TestingStoreReducer.counterValue,
        totalClick: state.TestingStoreReducer.totalClick
    }
}

// This maps the dispatch to the property of the component

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TestingActions, dispatch)
    }
}


const TestingRedux = (props) => {
	return (
		<div>
			<h3> Value: {props.counterValue}  Total Clicks: {props.totalClick}</h3>
            <br/>
            <Button variant="primary" size="lg"  onClick={() =>  props.actions.incrementOnes()}>Increment</Button> {' '}
            <Button variant="primary" size="lg" onClick={()=> props.actions.decrementOnes()}>Decriment</Button>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(TestingRedux);

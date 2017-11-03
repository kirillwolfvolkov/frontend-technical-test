import React from 'react';
import { connect } from 'react-redux';
import { toggleSelection } from "data-layer/events/actions";
import './Selection.scss'

const Selection = (props) => {
	const toggle = () => props.toggleSelection(props.id);

  return <button onClick={toggle}>{props.price}</button>;
}

export default connect(null, { toggleSelection })(Selection);


import React, { Component } from "react";
import { isEmpty, map, filter, isEqual } from "lodash";
import { connect } from "react-redux";
import { loadEvents, removeSelection } from "data-layer/events/actions";
import Event from "./event/Event";
import Sidebar from "containers/components/sidebar/Sidebar";
import "./Events.scss";

export class Events extends Component {
	componentDidMount() {
		this.props.loadEvents();
	}

	shouldComponentUpdate(nextProps) {
		return !isEqual(this.props, nextProps);
	}

	getSelectedSelections = () => {
		const {data, selected} = this.props;

		return filter(data.selections, ({id}) => selected.includes(id));
	}

	render() {
		const { data, selected } = this.props;

		if (isEmpty(data)) {
			return null;
		}

		return (
			<div className="events">
				{!isEmpty(selected) &&
				<Sidebar className="events__sidebar">
					{map(this.getSelectedSelections(), selection => (
						<div key={selection.id} className="events__sidebar-selection">
							<span className="events__sidebar-name">{selection.name}</span>
							<span className="events__sidebar-price">{selection.price}</span>
							<button
								className="events__sidebar-button"
								onClick={this.props.removeSelection.bind(null, selection.id)}
							>
								delete
							</button>
						</div>
					))}
				</Sidebar>}
				<div>
					{map(data.events, event => {
						return !isEmpty(event.markets) && <Event key={event.id} {...event}/>
					})}
				</div>
			</div>
		)
	}
}

export default connect(store => ({
	selected: store.events.selected,
	data: store.events.data.entities
}), { loadEvents, removeSelection })(Events);
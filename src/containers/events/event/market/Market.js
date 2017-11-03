import React from 'react';
import { connect } from "react-redux";
import { isEmpty, map, filter } from "lodash";
import cx from "classnames";
import { toggleSelection } from "data-layer/events/actions";
import './Market.scss';

const Market = (props) => {
  const { name, allSelections, selections, selected } = props;

	const prepareSelections = () =>
		filter(allSelections, ({id}) => selections.includes(id));


	return (
		<div className='market'>
      <span className="market-title">
	      {name}
      </span>
			{!isEmpty(selections) &&
			<div>
				{map(prepareSelections(), selection => {
					const { id, price } = selection;
					return (
						<button
							className={cx("selection", {
								"selection_selected": selected.includes(id)
							})}
							onClick={props.toggleSelection.bind(null, id)}
							key={id}
						>
							{selection.name}<br/>
							{price}
						</button>
					)
				})}
			</div>}
		</div>
	)
}

export default connect(state => ({
	allSelections: state.events.data.entities.selections,
	selected: state.events.selected
}), { toggleSelection })(Market);


import React from 'react';
import { isEmpty, map, filter } from "lodash";
import { connect } from "react-redux";
import Market from "./market/Market";
import './Event.scss';

const Event = (props) => {
  const { name, markets, allMarkets } = props;

  const prepareMarkets = () =>
	  filter(allMarkets, ({id}) => markets.includes(id));

  return (
	  <div className='event'>
      <span className="event-title">
        {name}
      </span>
      {!isEmpty(markets) &&
      <div>
        {map(prepareMarkets(), market => <Market key={market.id} {...market} />)}
      </div>}
    </div>
  )
}

export default connect(state => ({
	allMarkets: state.events.data.entities.markets
}))(Event);


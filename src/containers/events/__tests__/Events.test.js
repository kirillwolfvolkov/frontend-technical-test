import React from "react";
import { normalize } from "normalizr";
import { mount } from "enzyme";
import { eventsSchema } from "data-layer/events/schema";
import { Events } from "./../Events";

const FAKE_SELECTED_SELECTIONS = ["SEL_6", "SEL_7"];

const FAKE_DATA = normalize([
	{
		"id": "EVT_2",
		"name": "Atletico Madrid vs Malaga",
		"markets": [
			{
				"id": "MKT_3",
				"name": "Team to Win",
				"selections": [
					{
						"id": FAKE_SELECTED_SELECTIONS[0],
						"name": "Atletico",
						"price": 1.40
					},
					{
						"id": FAKE_SELECTED_SELECTIONS[1],
						"name": "Malaga",
						"price": 3.05
					}
				]
			}
		]
	}
], eventsSchema)

const getComponent = props =>
	<Events {...{loadEvents: () => {}, ...props}}/>

describe("<Events />", () => {
	it("should correctly render component", () => {
		const wrapper = mount(getComponent());

		expect(wrapper.find(Events).length).toBe(1);
	})

	it("should load data when call componentDidMount", () => {
		const loadEvents = jest.fn();
		mount(getComponent({loadEvents}));

		expect(loadEvents).toHaveBeenCalled();
	})

	it("should not render content when data is empty", () => {
		const wrapper = mount(getComponent());

		expect(wrapper.find(".events").length).toBe(0);
	})

	// it("should correctly render sidebar content", () => {
	// 	const wrapper = mount(getComponent({data: FAKE_DATA.entities, selected: FAKE_SELECTED_SELECTIONS, removeSelection: () => {}}));
	//
	// 	expect(wrapper.find(".events__sidebar-selection").length).toBe(FAKE_SELECTED_SELECTIONS.length);
	// })
})
import React from "react";
import { mount } from "enzyme";
import { Sidebar } from "./../Sidebar";

describe("<Sidebar/>", () => {
	it("should correctly render component", () => {
		const wrapper = mount(<Sidebar shown={false}/>);

		expect(wrapper.find(Sidebar).length).toBe(1);
	})

	it("should show sidebar", () => {
		const wrapper = mount(<Sidebar shown={true}/>);

		expect(wrapper.find(".sidebar_shown").length).toBe(1);
	})

	it("should hide sidebar", () => {
		const wrapper = mount(<Sidebar shown={false}/>);

		expect(wrapper.find(".sidebar_shown").length).toBe(0);
	})
})
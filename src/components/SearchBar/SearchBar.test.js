import React from "react";
import { shallow } from "enzyme";

import SearchBar from "./SearchBar";
import Dropdown from "../Dropdown/Dropdown";

describe("SearchBar", () => {
  it("renders without crashing", () => {
    shallow(<SearchBar />);
  });
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<SearchBar debug />);
    expect(component).toMatchSnapshot();
  });
  it("renders input field", () => {
    const searchBar = shallow(<SearchBar />);
    const inputField = (
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search for an book..."
      />
    );
    expect(searchBar.contains(inputField)).toEqual(true);
  });
  it("renders genres Dropdown", () => {
    const searchBar = shallow(<SearchBar />);
    expect(searchBar.contains(<Dropdown />)).toEqual(true);
  });
});

import React from "react";
import { shallow } from "enzyme";

import BookCatalog from "./BookCatalog";

describe("BookCatalog", () => {
  it("renders without crashing", () => {
    shallow(<BookCatalog />);
  });
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<BookCatalog debug />);
    expect(component).toMatchSnapshot();
  });
});

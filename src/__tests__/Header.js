import "@testing-library/jest-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import HomePage from "./../pages/HomePage/HomePage";
import Header from "./../components/Header/Header";
import DisplayBooks from "./../components/DisplayBooks/DisplayBooks";
import Footer from "./../components/Footer/Footer";

Enzyme.configure({ adapter: new Adapter() });

describe("HomePage", () => {
  it("renders Header component", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(Header)).toHaveLength(0);
  });
  it("renders DisplayBooks component", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(DisplayBooks)).toHaveLength(1);
  });
  it("renders Footer component", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});

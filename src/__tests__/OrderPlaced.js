import "@testing-library/jest-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Header from './../components/Header/Header';
import OrderPlaced from './../components/OrderPlaced/OrderPlaced';
import Footer from './../components/Footer/Footer';


Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<OrderPlaced />);


describe("OrderPlaced", () => {
  it("renders Header component", () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it("renders Footer component", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
  it("render main container", () => {
    expect(wrapper.find('.orderplaced-container')).toHaveLength(1);
  });
  it("test whether div is present or not", () => {
    expect(wrapper.find('.order-head')).toHaveLength(1);
  });
  it("test whether div is present or not", () => {
    expect(wrapper.find('.order-para')).toHaveLength(1);
  });


})


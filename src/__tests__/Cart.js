import "@testing-library/jest-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Cart from './../pages/Cart/Cart';

Enzyme.configure({ adapter: new Adapter() });
const cartComp = shallow(<Cart />);

describe("test if all the functional componets are working as expected", () => {
    it("Cart component", () => {
        expect(cartComp.find('.header1-text1-div')).toHaveLength(1);
      });
      it("Cart component", () => {
        expect(cartComp.find('.header-text1')).toHaveLength(1);
      });
      it("Cart component", () => {
        expect(cartComp.find('.header-tag2')).toHaveLength(1);
      });

    it("test if click on placeOrder button is working as expected", () => {
        const orderButton = cartComp.find('.placeOrderBtn')
        orderButton.simulate('click')
        cartComp.update()
        expect(cartComp.find('.customer-details').exists()).toBe(true)
    })

})
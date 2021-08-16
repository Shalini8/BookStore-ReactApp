import "@testing-library/jest-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Cart from './../pages/Cart/Cart';

Enzyme.configure({ adapter: new Adapter() });
const cartComp = shallow(<Cart/>);



describe("test if all the functional componets are working as expected", () => {
    it("test if click on placeOrder button is working as expected", () => {
        const cartButton = cartComp.find('.placeOrderBtn')
        cartButton.simulate('click')
        cartComp.update()
        expect(cartComp.find('.customer-details').exists()).toBe(true)
    })

})
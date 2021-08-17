import "@testing-library/jest-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Header } from "./../components/Header/Header";

Enzyme.configure({ adapter: new Adapter() });
const mockDispatch = jest.fn();
const props = {
    dispatch: mockDispatch,
}

const headerComp = shallow(<Header {...props} />)
const wrapper = shallow(<Header />)


describe("Header", () => {
    it("test if search box is loaded ", () => {
        expect(headerComp.find('.search-input')).toHaveLength(1);
        const event = { target: { value: "Apple" } }
        headerComp.find('.search-input').simulate("change", event);
        expect(mockDispatch).toHaveBeenCalledWith({ "searchData": "Apple", "type": "Search" })
    })
});



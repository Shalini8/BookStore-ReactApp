import "@testing-library/jest-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import WishList from './../pages/WishList/WishList';
import Header from './../components/Header/Header';


Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<WishList/>);


describe("WishList", () => {
    it("renders Header component", () => {
      expect(wrapper.find(Header)).toHaveLength(1);
    });
    it("renders wishlist header component", () => {
        expect(wrapper.find('.header-tag2')).toHaveLength(1);
      });
})

  
  
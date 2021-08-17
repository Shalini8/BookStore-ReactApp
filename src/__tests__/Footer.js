import "@testing-library/jest-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Footer from './../components/Footer/Footer';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<Footer />);

describe("Footer", () => {
    it("test whether main container is loaded or not", () => {
      expect(wrapper.find('.footer-container')).toHaveLength(1);
    });
})
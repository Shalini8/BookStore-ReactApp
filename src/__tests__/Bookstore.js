import "@testing-library/jest-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Login from "./../pages/Login/Login";
import Bookstore from "./../pages/Bookstore/Bookstore";
import Signin from "./../pages/Signin/Signin";

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Bookstore />);
const comp = mount(<Bookstore />);

describe("Bookstore", () => {
  it("renders Login component", () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  it("renders Signin component", () => {
    expect(wrapper.find(Signin)).toHaveLength(0);
  });
});
describe("Bookstore Signin button", () => {
  it("renders Signin component", () => {
    const SigninButton = wrapper.find(".SigninBtn");
    SigninButton.simulate("click");
    wrapper.update();
    expect(wrapper.find(Signin)).toHaveLength(1);
  });
  it("renders Login component", () => {
    const LoginButton = wrapper.find(".loginBtn");
    LoginButton.simulate("click");
    wrapper.update();
    expect(wrapper.find(Login)).toHaveLength(1);
  });
});


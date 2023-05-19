import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyProfile from '../component/MyProfile';
import store from '../Redux/store';
/* eslint-disable */
jest.setTimeout(10000);
describe("My profile", () => {
  it("it has to Render a list", () => {
    const profile = render(
      <>
        <Provider store={store}>
          <MyProfile />
        </Provider>
      </>
    );
    expect(profile).toMatchSnapshot();
  });
});

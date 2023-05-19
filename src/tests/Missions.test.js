import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../component/Missions';
import store from '../Redux/store';

jest.setTimeout(10000);
describe('Missions', () => {
  it('It has to match the snapshot', () => {
    const Mission = render(
      <>
        <Provider store={store}>
          <Missions />
        </Provider>
      </>,
    );
    expect(Mission).toMatchSnapshot();
  });
});

import { shallow } from 'enzyme';
import * as React from 'react';
import { TestComponentWrapper } from 'src/lib/test';
import { IntlProps } from '../../bootstrap';
import { ConfirmScreen } from '../ConfirmScreen';

const setup = (props: Partial<IntlProps> = {}) =>
  shallow(
    <TestComponentWrapper>
      <ConfirmScreen />
    </TestComponentWrapper>,
  );

describe('ConfirmScreen test', () => {
  it('should render', () => {
    const wrapper = setup().render();
    expect(wrapper).toMatchSnapshot();
  });
});

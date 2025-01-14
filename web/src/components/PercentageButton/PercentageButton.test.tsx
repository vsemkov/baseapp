import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { PercentageButton, PercentageButtonProps } from '.';

const onClickSpy = jest.fn();
const defaultProps: PercentageButtonProps = {
  value: 100,
  className: 'cr-button-percentage-100',
  onClick: onClickSpy,
};

const setup = (props: Partial<PercentageButtonProps> = {}) =>
  shallow(<PercentageButton {...{ ...defaultProps, ...props }} />);

describe('Close Button', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    onClickSpy.mockReset();
    wrapper = setup({ onClick: onClickSpy });
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick callback', () => {
    wrapper.find('.cr-button-percentage-100').simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('RecipeElement', () => {
  const clickFnOpen = jest.fn();

  it('check return elements', () => {
    const component = shallow(<Controls handleOpenForm={clickFnOpen} />);
    expect(component).toMatchSnapshot();
  });

  it('should render Add Recipe name', () => {
    const component = shallow(<Controls handleOpenForm={clickFnOpen} />);
    const btn = component.find({
      'data-testid': 'Add Recipe'
    });
    btn.first().simulate('click');
    expect(btn.first().props().children).toEqual('Add Recipe');
  });
  it('should render add button', () => {
    const component = shallow(<Controls handleOpenForm={clickFnOpen} />);
    const btn = component.find({
      'data-testid': 'add-button'
    });
    expect(btn.first().length).toBe(1);
  });
});

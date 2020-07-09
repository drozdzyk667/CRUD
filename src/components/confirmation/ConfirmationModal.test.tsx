import React from 'react';
import { shallow, mount } from 'enzyme';
import ConfirmationModal from './ConfirmationModal';
import { WARNING_MESSAGE } from 'pages/recipes/Recipes.constants';
import { Typography } from '@material-ui/core';
import { RecipeMock } from 'testUtils/recipe';

describe('RecipeElement', () => {
  const clickFnConfirm = jest.fn();
  const clickFnToggle = jest.fn();
  const isOpen = true;
  const isConfirmationModalOpen = !isOpen;

  it('should return correct wrapper', () => {
    const component = mount(
      <ConfirmationModal
        isConfirmationModalOpen={isConfirmationModalOpen}
        handleConfirmDelete={clickFnConfirm}
        toggleConfirmationModal={clickFnToggle}
        message={WARNING_MESSAGE}
      />
    );
    expect(component.children).toHaveLength(1);
    const btn = component.find({
      'data-testid': 'delete-dialog'
    });
    expect(btn).toMatchSnapshot();
    component.unmount();
  });

  it('should close modal', () => {
    const component = shallow(
      <ConfirmationModal
        isConfirmationModalOpen={isConfirmationModalOpen}
        handleConfirmDelete={clickFnConfirm}
        toggleConfirmationModal={clickFnToggle}
        message={WARNING_MESSAGE}
      />
    );
    const btn = component.find({
      'data-testid': 'delete-dialog'
    });
    btn.first().simulate('click');
    expect(isConfirmationModalOpen).toEqual(false);
  });
  it('should display warning message', () => {
    const component = shallow(
      <ConfirmationModal
        isConfirmationModalOpen={isConfirmationModalOpen}
        handleConfirmDelete={clickFnConfirm}
        toggleConfirmationModal={clickFnToggle}
        message={WARNING_MESSAGE}
      />
    );
    expect(
      component
        .find(Typography)
        .at(0)
        .text()
    ).toEqual(WARNING_MESSAGE);
  });
  it('should remove recipe', () => {
    const mockedRecipeID = 1;
    const recipes = [RecipeMock];
    const handleConfirmDelete = () =>
      recipes.filter(recipe => recipe.id !== mockedRecipeID);

    const component = shallow(
      <ConfirmationModal
        isConfirmationModalOpen={isConfirmationModalOpen}
        handleConfirmDelete={handleConfirmDelete}
        toggleConfirmationModal={clickFnToggle}
        message={WARNING_MESSAGE}
      />
    );
    const btn = component.find({
      'data-testid': 'confirm-delete'
    });
    btn.first().simulate('click');
    expect(handleConfirmDelete()).toEqual([]);
  });
});

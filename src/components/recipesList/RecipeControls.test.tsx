import React from 'react';
import { shallow } from 'enzyme';
import RecipeControls from './RecipeControls';
import { RecipeMock } from 'testUtils/recipe';

describe('RecipeElement', () => {
  const clickFnOpenForm = jest.fn();
  const clickFnDeleteRecipe = jest.fn();

  it('should render correctly ', () => {
    const component = shallow(
      <RecipeControls
        handleOpenForm={clickFnOpenForm}
        handleDeleteRecipe={clickFnDeleteRecipe}
        recipe={RecipeMock}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render Delete', () => {
    const component = shallow(
      <RecipeControls
        handleOpenForm={clickFnOpenForm}
        handleDeleteRecipe={clickFnDeleteRecipe}
        recipe={RecipeMock}
      />
    );
    const btn = component.find({
      'data-testid': 'Delete'
    });
    expect(btn.first().props().children).toEqual('Delete');
  });

  it('should render Edit', () => {
    const component = shallow(
      <RecipeControls
        handleOpenForm={clickFnOpenForm}
        handleDeleteRecipe={clickFnDeleteRecipe}
        recipe={RecipeMock}
      />
    );
    const btn = component.find({
      'data-testid': 'Edit'
    });
    expect(btn.first().props().children).toEqual('Edit');
  });
  it('should render delete button', () => {
    const component = shallow(
      <RecipeControls
        handleOpenForm={clickFnOpenForm}
        handleDeleteRecipe={clickFnDeleteRecipe}
        recipe={RecipeMock}
      />
    );
    const btn = component.find({
      'data-testid': 'delete-button'
    });
    expect(btn.first().length).toBe(1);
  });
  it('should render edit button', () => {
    const component = shallow(
      <RecipeControls
        handleOpenForm={clickFnOpenForm}
        handleDeleteRecipe={clickFnDeleteRecipe}
        recipe={RecipeMock}
      />
    );
    const btn = component.find({
      'data-testid': 'edit-button'
    });
    expect(btn.first().length).toBe(1);
  });
});

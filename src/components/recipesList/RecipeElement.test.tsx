import React from 'react';
import { shallow, mount } from 'enzyme';
import RecipeElement from './RecipeElement';
import RecipeControls from './RecipeControls';
import { Names } from 'pages/recipes/Recipes.constants';
import { Typography } from '@material-ui/core';
import { RecipeMock } from 'testUtils/recipe';

describe('RecipeElement', () => {
  const clickFn = jest.fn();
  const clickFnOpenForm = jest.fn();
  const clickFnDeleteRecipe = jest.fn();
  const children = (
    <RecipeControls
      handleOpenForm={clickFnOpenForm}
      handleDeleteRecipe={clickFnDeleteRecipe}
      recipe={RecipeMock}
    />
  );
  it('should render correctly ', () => {
    const component = shallow(
      <RecipeElement handleExpandOnlyOneRecipe={clickFn} recipe={RecipeMock}>
        {children}
      </RecipeElement>
    );
    expect(component).toMatchSnapshot();
  });
  it('should render recipe name', () => {
    const component = shallow(
      <RecipeElement handleExpandOnlyOneRecipe={clickFn} recipe={RecipeMock}>
        {children}
      </RecipeElement>
    );
    const name = component.find(Typography);
    expect(name.first().text()).toEqual('Test Recipe');
  });
  it('should render ingredients header', () => {
    const component = shallow(
      <RecipeElement handleExpandOnlyOneRecipe={clickFn} recipe={RecipeMock}>
        {children}
      </RecipeElement>
    );
    const ingredients = component.find({
      'data-testid': Names.ingredients
    });
    expect(ingredients.text()).toEqual('Ingredients');
  });
  it('test if recipe is collapsed', () => {
    const component = mount(
      <RecipeElement handleExpandOnlyOneRecipe={clickFn} recipe={RecipeMock}>
        {children}
      </RecipeElement>
    );
    expect(component.prop('recipe').isExpanded).toEqual(false);
  });

  it('test if recipe render props correctly', () => {
    const component = mount(
      <RecipeElement handleExpandOnlyOneRecipe={clickFn} recipe={RecipeMock}>
        {children}
      </RecipeElement>
    );
    expect(component.prop('recipe')).toEqual({
      id: 1,
      recipeName: 'Test Recipe',
      isExpanded: false,
      ingredients: ['test1', 'test2', 'test3']
    });
  });
});

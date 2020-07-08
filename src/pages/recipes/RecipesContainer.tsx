import React from 'react';
import Header from '../../components/header';
import { Recipe } from './Recipes.constants';
import Controls from '../../components/controls';
import RecipesListContainer from '../../components/recipesList';
import RecipeForm from '../../components/recipesList/RecipeForm';

const RecipesContainer = () => {
  const localRecipes = JSON.parse(localStorage.getItem('storageRecipes'));
  const [isFormOpen, setIsFormOpen] = React.useState<boolean>(false);
  const [formType, setFormType] = React.useState<string>('');
  const [formElement, setFormElement] = React.useState<Recipe | undefined>(
    undefined
  );
  const [recipes, setRecipes] = React.useState<Recipe[]>(localRecipes ?? []);

  const handleOpenForm = (type: string, element?: Recipe) => {
    setFormType(type);
    setIsFormOpen(true);
    setFormElement(element);
  };

  const handleCloseForm = () => {
    setFormType('');
    setIsFormOpen(false);
    setFormElement(undefined);
  };

  const handleDeleteRecipe = (id: number) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const handleExpandOnlyOneRecipe = (id: number) => {
    setRecipes(
      recipes.map(recipe =>
        recipe.id === id
          ? { ...recipe, isExpanded: !recipe.isExpanded }
          : { ...recipe, isExpanded: false }
      )
    );
  };

  const handleCollapseRecipes = React.useCallback(() => {
    setRecipes(r => r.map(recipe => ({ ...recipe, isExpanded: false })));
  }, []);

  const onSubmit = data => {
    const hasRecipe = recipes.find(recipe => recipe.id === data.id);
    const ingredientsToArray = data?.ingredients
      ?.split(',')
      .map(elem => elem.trim())
      .filter(item => item);

    if (hasRecipe) {
      setRecipes(
        recipes.map(recipe =>
          recipe.id === data.id
            ? {
                ...recipe,
                recipeName: data.recipeName.trim(),
                ingredients: ingredientsToArray
              }
            : recipe
        )
      );
    } else {
      setRecipes([
        ...recipes,
        {
          id: Math.random(),
          isExpanded: false,
          recipeName: data.recipeName.trim(),
          ingredients: ingredientsToArray
        }
      ]);
    }
    setIsFormOpen(false);
  };

  React.useEffect(() => {
    handleCollapseRecipes();
  }, [handleCollapseRecipes]);

  React.useEffect(() => {
    return localStorage.setItem('storageRecipes', JSON.stringify(recipes));
  }, [recipes]);

  const formProps = {
    handleCloseForm,
    handleOpenForm,
    isFormOpen,
    onSubmit
  };

  return (
    <>
      <Header />
      <RecipesListContainer
        {...formProps}
        recipes={recipes}
        handleDeleteRecipe={handleDeleteRecipe}
        handleExpandOnlyOneRecipe={handleExpandOnlyOneRecipe}
      />
      <Controls handleOpenForm={handleOpenForm} />
      <RecipeForm
        type={formType}
        recipe={formElement}
        onSubmit={onSubmit}
        isFormOpen={isFormOpen}
        handleCloseForm={handleCloseForm}
      />
    </>
  );
};

export default RecipesContainer;

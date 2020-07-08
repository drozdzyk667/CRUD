import React from 'react';
import { RecipesContainer } from '../styled';
import RecipeElement from './RecipeElement';
import RecipeControls from './RecipeControls';
import { Recipe } from '../../pages/recipes/Recipes.constants';

interface RecipesProps {
  recipes: Recipe[];
  handleOpenForm: (type: string) => void;
  handleDeleteRecipe: (id: number) => void;
  handleExpandOnlyOneRecipe: (id: number) => void;
}

const RecipesListContainer: React.FC<RecipesProps> = ({
  recipes,
  handleOpenForm,
  handleDeleteRecipe,
  handleExpandOnlyOneRecipe
}) => {
  return (
    <>
      <RecipesContainer>
        {recipes.map(recipe => (
          <RecipeElement
            key={recipe.id}
            recipe={recipe}
            handleExpandOnlyOneRecipe={handleExpandOnlyOneRecipe}
          >
            <RecipeControls
              recipe={recipe}
              handleOpenForm={handleOpenForm}
              handleDeleteRecipe={handleDeleteRecipe}
            />
          </RecipeElement>
        ))}
      </RecipesContainer>
    </>
  );
};

export default RecipesListContainer;

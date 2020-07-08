import React from 'react';
import { ButtonsContainer, Button } from '../styled';
import {
  Recipe,
  Names,
  Colors,
  WARNING_MESSAGE
} from '../../pages/recipes/Recipes.constants';
import ConfirmationModal from '../confirmation';

interface RecipeControlProps {
  recipe: Recipe;
  handleOpenForm: (type: string, element?: Recipe) => void;
  handleDeleteRecipe: (id: number) => void;
}

const RecipeControls: React.FC<RecipeControlProps> = ({
  recipe,
  handleOpenForm,
  handleDeleteRecipe
}) => {
  const [isDeleteModal, setIsDeleteModal] = React.useState(false);

  const toggleConfirmationModal = () => {
    setIsDeleteModal(isDeleteModal => !isDeleteModal);
  };

  const handleConfirmDelete = () => {
    handleDeleteRecipe(recipe.id);
    setIsDeleteModal(false);
  };

  return (
    <>
      <ButtonsContainer>
        <Button background={Colors.delete} onClick={toggleConfirmationModal}>
          {Names.delete}
        </Button>
        <Button
          black
          background={Colors.edit}
          onClick={() => handleOpenForm(Names.edit, recipe)}
        >
          {Names.edit}
        </Button>
      </ButtonsContainer>
      <ConfirmationModal
        isDeleteModal={isDeleteModal}
        handleConfirmDelete={handleConfirmDelete}
        toggleConfirmationModal={toggleConfirmationModal}
        message={WARNING_MESSAGE}
      />
    </>
  );
};

export default RecipeControls;

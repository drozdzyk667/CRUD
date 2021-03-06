import React from 'react';
import Icon from 'Icons';
import { ButtonsContainer, Button } from '../styled';
import { makeStyles, Box } from '@material-ui/core';
import {
  Recipe,
  Names,
  Colors,
  WARNING_MESSAGE
} from 'pages/recipes/Recipes.constants';
import ConfirmationModal from '../confirmation';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    margin: '0 0.5em'
  }
});

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
  const classes = useStyles();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = React.useState(
    false
  );

  const toggleConfirmationModal = () => {
    setIsConfirmationModalOpen(
      isConfirmationModalOpen => !isConfirmationModalOpen
    );
  };

  const handleConfirmDelete = () => {
    handleDeleteRecipe(recipe.id);
    setIsConfirmationModalOpen(false);
  };

  return (
    <>
      <ButtonsContainer>
        <Button
          data-testid={'delete-button'}
          background={Colors.delete}
          onClick={toggleConfirmationModal}
        >
          <Box className={classes.container}>
            <span data-testid={Names.delete} className={classes.text}>
              {Names.delete}
            </span>
            <Icon name='Delete' />
          </Box>
        </Button>
        <Button
          black
          background={Colors.edit}
          onClick={() => handleOpenForm(Names.edit, recipe)}
        >
          <Box data-testid={'edit-button'} className={classes.container}>
            <span data-testid={Names.edit} className={classes.text}>
              {Names.edit}
            </span>
            <Icon name='Edit' />
          </Box>
        </Button>
      </ButtonsContainer>
      <ConfirmationModal
        isConfirmationModalOpen={isConfirmationModalOpen}
        handleConfirmDelete={handleConfirmDelete}
        toggleConfirmationModal={toggleConfirmationModal}
        message={WARNING_MESSAGE}
      />
    </>
  );
};

export default RecipeControls;

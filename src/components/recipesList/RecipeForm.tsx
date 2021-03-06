import React from 'react';
import Icon from 'Icons';
import { Formik, Form } from 'formik';
import FormikField from '../formik';
import {
  Names,
  RecipeSchema,
  NONE_IS_TOUCHED,
  SubmitForm
} from 'pages/recipes/Recipes.constants';
import {
  Box,
  Button,
  makeStyles,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Dialog,
  LinearProgress
} from '@material-ui/core';
import { Recipe } from 'pages/recipes/Recipes.constants';

const useStyles = makeStyles({
  container: {
    padding: '1em'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  dialogClose: {
    marginLeft: 'auto',
    cursor: 'pointer',
    margin: '0.5em',
    transition: '0.3s',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  header: {
    display: 'flex',
    flexDirection: 'row'
  }
});

interface FormProps {
  type: string;
  recipe: Recipe | undefined;
  isFormOpen: boolean;
  handleCloseForm: () => void;
  handleSubmitForm: (data: any) => void;
}

const initialAddValues = () => ({
  id: Math.random(),
  recipeName: '',
  ingredients: '',
  isExpanded: false
});

const RecipeForm: React.FC<FormProps> = ({
  type,
  recipe,
  isFormOpen,
  handleCloseForm,
  handleSubmitForm
}) => {
  const classes = useStyles();

  const initialEditValues = () => {
    if (recipe) {
      const convertIngredientsToPlainText = recipe.ingredients.join(', ');
      return {
        id: recipe.id,
        recipeName: recipe.recipeName,
        isExpanded: recipe.isExpanded,
        ingredients: convertIngredientsToPlainText
      };
    }
  };

  const initialValues: SubmitForm =
    recipe && type === Names.edit
      ? initialEditValues() ?? initialAddValues()
      : initialAddValues();

  return (
    <Dialog fullWidth open={isFormOpen} onClose={handleCloseForm}>
      <Formik
        enableReinitialize
        onSubmit={handleSubmitForm}
        initialValues={initialValues}
        validationSchema={RecipeSchema}
      >
        {({ touched, isSubmitting, isValid }) => {
          const isNoneTouched = Object.keys(touched).length === NONE_IS_TOUCHED;
          const isDisabled = isSubmitting || !isValid;

          return (
            <Form>
              <Box className={classes.header}>
                <DialogTitle>{type}</DialogTitle>
                <Icon
                  onClick={handleCloseForm}
                  className={classes.dialogClose}
                  name='Close'
                />
              </Box>
              <Divider />
              <Box className={classes.container}>
                <DialogContent className={classes.content}>
                  <FormikField
                    required
                    placeholder={Names.recipeName}
                    name={'recipeName'}
                    margin='1em 0'
                  />
                  <FormikField
                    required
                    name={'ingredients'}
                    placeholder={Names.ingredients}
                    margin='1em 0'
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    disabled={
                      type === Names.edit
                        ? isDisabled
                        : isDisabled || isNoneTouched
                    }
                    variant='contained'
                    color='primary'
                    type='submit'
                  >
                    {Names.confirm}
                  </Button>
                  <Button
                    onClick={handleCloseForm}
                    variant='contained'
                    color='default'
                  >
                    {Names.cancel}
                  </Button>
                </DialogActions>
              </Box>
              {isSubmitting && <LinearProgress />}
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default RecipeForm;

import React from 'react';
import { Formik, Form } from 'formik';
import FormikField from '../formik';
import {
  Names,
  initialFormValues,
  RecipeSchema
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
  input: {
    margin: 0
  }
});

interface FormProps {
  isFormOpen: boolean;
  onSubmit: (data: any) => void;
  handleCloseForm: () => void;
  type: string;
  recipe?: Recipe;
}

const RecipeForm: React.FC<FormProps> = ({
  type,
  recipe,
  onSubmit,
  isFormOpen,
  handleCloseForm
}) => {
  const classes = useStyles();

  const convertIngredientsToPlainText = recipe?.ingredients.join(', ');

  const initialEditValues = {
    id: recipe?.id,
    recipeName: recipe?.recipeName,
    isExpanded: recipe?.isExpanded,
    ingredients: convertIngredientsToPlainText
  };

  return (
    <Dialog fullWidth open={isFormOpen} onClose={handleCloseForm}>
      <Formik
        onSubmit={onSubmit}
        initialValues={
          type === Names.edit ? initialEditValues : initialFormValues
        }
        validationSchema={RecipeSchema}
        enableReinitialize={true}
      >
        {props => {
          const NONE_IS_TOUCHED = 0;
          const isNoneTouched =
            Object.keys(props.touched).length === NONE_IS_TOUCHED;
          const isDisabled = props.isSubmitting || !props.isValid;
          return (
            <Form>
              <DialogTitle>{type}</DialogTitle>
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
                    {Names.add}
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
              {props.isSubmitting && <LinearProgress />}
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default RecipeForm;

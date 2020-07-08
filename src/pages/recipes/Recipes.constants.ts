import * as Yup from 'yup';

export enum Colors {
  edit = '#FFF',
  add = '#3db6f2',
  delete = '#ed5b3e',
  black = '#000',
  white = '#FFF',
  lightGray = '#f7f7f7',
  gray = '#cfcfcf',
  lightGreen = '#d5ffc2'
}

export enum Names {
  ingredients = 'Ingredients',
  recipes = 'Recipes',
  add = 'Add Recipe',
  delete = 'Delete',
  edit = 'Edit',
  confirm = 'Confirm',
  cancel = 'Cancel',
  save = 'Save',
  recipeName = 'Recipe name'
}

interface BasicData {
  id: number;
  recipeName: string;
  isExpanded: boolean;
}

export interface Recipe extends BasicData {
  ingredients: string[];
}

export interface SubmitForm extends BasicData {
  ingredients: string;
}

export const NONE_IS_TOUCHED = 0;
export const MIN_INPUT_LENGTH = 3;
export const MAX_RECIPE_NAME_LENGTH = 50;
export const MAX_INGREDIENTS_LENGTH = 100;

// 700px window width
export const NARROW_FORM_VIEW = 700;

export const RecipeSchema = Yup.object().shape({
  id: Yup.number(),
  recipeName: Yup.string()
    .min(
      MIN_INPUT_LENGTH,
      'The minimum length of the Recipe Name is 3 characters'
    )
    .max(
      MAX_RECIPE_NAME_LENGTH,
      'The maximum length of the Recipe Name is 30 characters'
    )
    .required('Required field'),
  ingredients: Yup.string()
    .min(
      MIN_INPUT_LENGTH,
      'The minimum length of the Ingredients is 3 characters'
    )
    .max(
      MAX_INGREDIENTS_LENGTH,
      'The maximum length of the Ingredients is 100 characters'
    )
    .required('Required field'),
  isExpanded: Yup.boolean()
});

export const initialAddValues = () => ({
  id: Math.random(),
  recipeName: '',
  ingredients: '',
  isExpanded: false
});

export const WARNING_MESSAGE = 'Are you sure?, Recipe will be lost !';

import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  makeStyles,
  Theme,
  Box,
  AccordionActions
} from '@material-ui/core';
import { IngredientContainer } from '../styled';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Recipe, Names, Colors } from 'pages/recipes/Recipes.constants';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: theme.shadows[4],
    paddingBottom: '1em'
  },
  summary: {
    background: Colors.lightGray,
    boxShadow: theme.shadows[2]
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    padding: '1em',
    fontWeight: 'bold',
    margin: 'auto auto',
    marginBottom: '50px',
    borderBottom: `2px solid ${Colors.gray}`
  },
  textWrap: {
    width: 'calc(100vw - 120px)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
}));

interface RecipeProps {
  recipe: Recipe;
  children: React.ReactNode;
  handleExpandOnlyOneRecipe: (id: number) => void;
}

const RecipeElement: React.FC<RecipeProps> = ({
  recipe,
  children,
  handleExpandOnlyOneRecipe
}) => {
  const classes = useStyles();

  return (
    <>
      <Accordion
        expanded={recipe.isExpanded}
        onChange={() => handleExpandOnlyOneRecipe(recipe.id)}
        className={classes.root}
      >
        <AccordionSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.textWrap} variant='h4'>
            {recipe.recipeName}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography
            data-testid={Names.ingredients}
            className={classes.title}
            variant='h5'
          >
            {Names.ingredients}
          </Typography>
          <Box>
            {recipe.ingredients.map((ingredient: string, index: number) => (
              <IngredientContainer
                className={classes.textWrap}
                key={`${ingredient}-${index}`}
              >
                {ingredient}
              </IngredientContainer>
            ))}
          </Box>
          <AccordionActions>{children}</AccordionActions>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default RecipeElement;

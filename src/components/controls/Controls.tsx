import React from 'react';
import Icon from 'Icons';
import { makeStyles, Box } from '@material-ui/core';
import { ControlsContainer, Button } from '../styled';
import { Colors, Names } from 'pages/recipes/Recipes.constants';

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

interface ControlProps {
  handleOpenForm: (type: string) => void;
}

const Controls: React.FC<ControlProps> = ({ handleOpenForm }) => {
  const classes = useStyles();
  return (
    <ControlsContainer>
      <Button onClick={() => handleOpenForm(Names.add)} background={Colors.add}>
        <Box className={classes.container}>
          <span className={classes.text}>{Names.add}</span>
          <Icon name='Add' />
        </Box>
      </Button>
    </ControlsContainer>
  );
};

export default Controls;

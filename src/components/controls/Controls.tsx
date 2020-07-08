import React from 'react';
import { ControlsContainer, Button } from '../styled';
import { Colors, Names } from '../../pages/recipes/Recipes.constants';

interface ControlProps {
  handleOpenForm: (type: string) => void;
}

const Controls: React.FC<ControlProps> = ({ handleOpenForm }) => {
  return (
    <ControlsContainer>
      <Button onClick={() => handleOpenForm(Names.add)} background={Colors.add}>
        {Names.add}
      </Button>
    </ControlsContainer>
  );
};

export default Controls;

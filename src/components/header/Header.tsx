import React from 'react';
import { HeaderContainer } from '../styled';
import { Names } from 'pages/recipes/Recipes.constants';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>{Names.recipes}</h1>
    </HeaderContainer>
  );
};

export default Header;

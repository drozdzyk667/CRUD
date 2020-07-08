import styled from 'styled-components';
import { Colors } from '../pages/recipes/Recipes.constants';

export const RecipesContainer = styled.div`
  margin: 2em 1em;
  background: #eee;
`;

export const IngredientContainer = styled.div`
  margin: 0.5em;
  padding: 1em;
  border-radius: 5px;
  color: black;
  border: 2px solid ${Colors.gray};
  background: ${Colors.lightGreen};
  font-weight: bold;
`;

export const HeaderContainer = styled.div`
  margin-bottom: 5em;
  height: 10vh;
  display: flex;
  justify-content: center;
  alignitems: center;
  border-bottom: 2px solid black;
`;

export const ControlsContainer = styled.div`
  margin: 1em;
  height: 10vh;
`;

export const Button = styled.button`
  background: ${props => props.background};
  color: ${props => (props.black ? Colors.black : Colors.white)};
  border-color: ${props =>
    props.background === Colors.white ? Colors.black : props.background};
  border-width: 2px;
  font-size: 1em;
  margin: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  outline: none;
  padding: 0.7em 1.2em;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonsContainer = styled.div`
  border-top: 1px solid ${Colors.gray};
  margin: 1em;
  margin-top: 3em;
  height: 5vh;
`;

import React from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  makeStyles,
  DialogActions,
  Typography
} from '@material-ui/core';
import { Names } from 'pages/recipes/Recipes.constants';

const useStyles = makeStyles({
  text: {
    padding: '1em 0.5em'
  }
});

interface Props {
  message: string;
  isDeleteModal: boolean;
  toggleConfirmationModal: () => void;
  handleConfirmDelete: () => void;
}

const ConfirmationModal: React.FC<Props> = ({
  message,
  isDeleteModal,
  toggleConfirmationModal,
  handleConfirmDelete
}) => {
  const classes = useStyles();

  return (
    <Dialog open={isDeleteModal} onClose={toggleConfirmationModal}>
      <DialogContent>
        <Typography className={classes.text} variant='h5'>
          {message}
        </Typography>
        <DialogActions>
          <Button
            variant='contained'
            color='secondary'
            onClick={handleConfirmDelete}
          >
            {Names.confirm}
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={toggleConfirmationModal}
          >
            {Names.cancel}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;

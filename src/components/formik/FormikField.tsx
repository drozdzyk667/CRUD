import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Colors } from '../../pages/recipes/Recipes.constants';
import { Field, ErrorMessage } from 'formik';

const useStyles = makeStyles({
  field: (props: any) => ({
    padding: '1em',
    margin: props.margin || '1.5em 0',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: Colors.gray,
    borderRadius: '5px',
    width: '90%'
  }),
  error: {
    fontWeight: 'bold',
    margin: '0 0.5em',
    fontSize: '13px',
    color: 'red'
  },
  required: {
    margin: '0 0.5em',
    verticalAlign: 'super',
    color: 'red'
  }
});

interface Props {
  placeholder: string;
  name: string;
  type?: string;
  required: boolean;
  margin: string;
}

const FormikField: React.FC<Props> = ({
  required,
  type = 'text',
  name,
  margin,
  ...restProps
}) => {
  const classes = useStyles({ margin });

  return (
    <div>
      <Field type={type} name={name} className={classes.field} {...restProps} />
      {required ? <span className={classes.required}>{'*'}</span> : null}
      <ErrorMessage component='div' className={classes.error} name={name} />
    </div>
  );
};

export default FormikField;

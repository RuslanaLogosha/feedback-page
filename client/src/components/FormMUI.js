import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '400px',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const Form = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <form className={styles.root} noValidate {...props}>
      {children}
    </form>
  );
};

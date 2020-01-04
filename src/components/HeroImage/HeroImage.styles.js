import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 800
    },
    [theme.breakpoints.up('lg')]: {
      maxHeight: 500
    }
  },
}));

export default styles;
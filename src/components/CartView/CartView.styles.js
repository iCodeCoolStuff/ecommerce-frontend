import { makeStyles } from '@material-ui/core/styles';

const styles = theme => ({
  table: {
    marginTop: 32,
    marginBottom: 16,
  },
  totalBar: {
    marginBottom: 24,
    [theme.breakpoints.up('sm')] : {
      marginRight: 36,
    }
  },
  mobileHidden: {
    display: 'flex',
    [theme.breakpoints.down('sm')] : {
      display: 'none',
    }
  },
  totalBox : {
    [theme.breakpoints.down('sm')] : {
      flexGrow: 1,
    }
  }
});

export default styles;
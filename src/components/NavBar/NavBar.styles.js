import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    boxShadow: 'none'
  },
  categorySelect: {
    backgroundColor: theme.palette.common.white,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderColor: '#80bdff',
  },
  selectPadding: {
    paddingLeft: theme.spacing(1),
  },
  iconDiv: {
    display: 'flex'
  },
  mobileFakeDiv: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
  mobileToolBar: {
    marginTop: -12,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
}));

export default useStyles;
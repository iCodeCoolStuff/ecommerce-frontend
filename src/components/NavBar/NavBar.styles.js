import { fade, makeStyles } from '@material-ui/core/styles';

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
  searchDiv: {
    position: 'relative',
    marginLeft: theme.spacing(3),
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
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
  mobileSearchDiv: {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
  },
}));

export default useStyles;
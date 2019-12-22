import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'inherit',
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
  searchInput: {
    padding: theme.spacing(1),
    backgroundColor: fade(theme.palette.common.white, 0.15),
  },
  searchButton: {
    boxShadow: 'none',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    '&:hover': {
      boxShadow: 'none'
    },
    '&:focus': {
      boxShadow: 'none'
    },
  },
  mobileSearchInput: {
    padding: theme.spacing(1),
    backgroundColor: fade(theme.palette.common.white, 0.15),
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
  },
}));

export default useStyles;
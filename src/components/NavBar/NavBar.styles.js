const styles = theme => ({
  root: {
    color: theme.palette.common.white,
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
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover' : {
      color: 'inherit',
    },
    '&:focus' : {
      color: 'inherit'
    },
    '&:active': {
      color: 'inherit'
    }
  },
  accountActions: {
    display: 'flex',
    paddingLeft: theme.spacing(1)
  },
  accountLink: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover' : {
      color: 'inherit',
      textDecoration: 'underline',
    },
    '&:focus' : {
      color: 'inherit'
    },
    '&:active': {
      color: 'inherit'
    }
  },
  mobileMenu: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  }
});

export default styles;
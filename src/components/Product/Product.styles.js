import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  cartIcon: {
    position: 'relative',
    fontSize: 16, 
    marginLeft: 2,
    top: 3
  },
  strikeOutText: {
    textDecoration: "line-through",
    color: theme.palette.text.disabled
  },
  listPrice: {
    marginLeft: theme.spacing(0.75),
    position: 'relative',
    top: 2,
    fontSize: 14
  },
  priceBox: {
    padding: theme.spacing(1, 1, 1, 0)
  },
  cardContentPadding: {
    paddingBottom: theme.spacing(0.5)
  },
  mobileHidden: {
    display: 'none',
    [theme.breakpoints.up('sm')] : {
      display: 'inline'
    }
  }
}));

export default styles;
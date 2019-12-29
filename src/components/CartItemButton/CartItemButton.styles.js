import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  cartIcon: {
    position: 'relative',
    fontSize: 16, 
    marginLeft: 2,
    top: 3
  },
  mobileHidden: {
    display: 'none',
    [theme.breakpoints.up('sm')] : {
      display: 'inline'
    }
  }
}));

export default styles;
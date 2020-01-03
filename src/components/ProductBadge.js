import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const ProductBadge = withStyles(theme => ({
  badge: {
    left: 22,
    top: 14,
  },
  root: {
    width: '100%'
  }
}))(Badge);

export default ProductBadge;
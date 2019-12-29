const styles = theme => ({
  detailPadding: {
    marginTop: 32,
    marginBottom: 32 
  },
  rating: {
    marginBottom: 8
  },
  price: {
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
  },
  strikeOutText: {
    textDecoration: "line-through",
    color: theme.palette.text.disabled
  },
  listPrice: {
    marginLeft: theme.spacing(0.75),
    position: 'relative',
    top: 6  ,
    fontSize: 18
  },
  buttonMargin: {
    marginTop: theme.spacing(2)
  }
});

export default styles;
import React from 'react';

import Button         from '@material-ui/core/Button';
import Input          from '@material-ui/core/Input';
import MenuItem       from '@material-ui/core/MenuItem';
import Select         from '@material-ui/core/Select';
import SearchIcon     from '@material-ui/icons/Search';

import styles from './SearchBar.styles';

function SearchBar(props) {
  const classes = styles();
  const [category, setCategory] = React.useState('');

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  return (
    <div className={props.mobile ? classes.mobileSearchDiv : classes.searchDiv}>
      {!props.mobile ? 
      <Select 
        className={classes.categorySelect}
        classes={{
          select: classes.selectPadding
        }}
        disableUnderline={true}
        value={category}
        onChange={handleCategoryChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>All Stuffs</MenuItem>
        <MenuItem value={2}>Clothing</MenuItem>
        <MenuItem value={3}>Technology</MenuItem>
      </Select> : null}
      <Input
        placeholder="Search..."
        disableUnderline={true}
        fullWidth={true}
        classes={{
          input: props.mobile ? classes.mobileSearchInput : classes.searchInput,
          root: classes.root,
        }}
      />
      <Button type="submit" variant="contained" color="secondary" className={classes.searchButton}>
        <SearchIcon/>
      </Button>
    </div>
  );
}

export default SearchBar;
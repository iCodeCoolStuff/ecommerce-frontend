import React from 'react';

import Button         from '@material-ui/core/Button';
import Input          from '@material-ui/core/Input';
import MenuItem       from '@material-ui/core/MenuItem';
import Select         from '@material-ui/core/Select';
import SearchIcon     from '@material-ui/icons/Search';

import styles from './SearchBar.styles';

function SearchBar(props) {
  const classes = styles();

  return (
      <form className={props.mobile ? classes.mobileSearchDiv : classes.searchDiv} onSubmit={e => props.handleSearch(e)}>
        {!props.mobile ? 
        <Select 
          className={classes.categorySelect}
          classes={{
            select: classes.selectPadding
          }}
          displayEmpty
          disableUnderline={true}
          value={props.searchCategory}
          onChange={e => props.handleSetSearchCategory(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value={1}>Food & Drink</MenuItem>
          <MenuItem value={2}>Clothing</MenuItem>
          <MenuItem value={3}>Technology</MenuItem>
          <MenuItem value={4}>Miscellaneous</MenuItem>
        </Select> : null}
        <Input
          placeholder="Search..."
          disableUnderline={true}
          fullWidth={true}
          classes={{
            input: props.mobile ? classes.mobileSearchInput : classes.searchInput,
            root: classes.root,
          }}
          value={props.searchText}
          onChange={e => props.handleSetSearchText(e.target.value)}
        />
        <Button type="submit" variant="contained" color="secondary" className={classes.searchButton}>
          <SearchIcon/>
        </Button>
      </form>
  );
}

export default SearchBar;
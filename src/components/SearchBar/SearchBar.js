import React from 'react';

import Button         from '@material-ui/core/Button';
import Input          from '@material-ui/core/Input';
import MenuItem       from '@material-ui/core/MenuItem';
import Select         from '@material-ui/core/Select';
import SearchIcon     from '@material-ui/icons/Search';

import styles from './SearchBar.styles';


function SearchBar(props) {
  const classes = styles();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <>
      {!props.mobile ? <Select 
        className={classes.categorySelect}
        classes={{
          select: classes.selectPadding
        }}
        disableUnderline={true}
        value={age}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>All Stuffs</MenuItem>
        <MenuItem value={20}>Clothing</MenuItem>
        <MenuItem value={30}>Technology</MenuItem>
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
      <Button variant="contained" color="secondary" className={classes.searchButton}>
        <SearchIcon/>
      </Button>
    </>
  );
}

export default SearchBar;
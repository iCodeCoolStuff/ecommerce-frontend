import React from 'react';

import Button         from '@material-ui/core/Button';
import Input          from '@material-ui/core/Input';
import MenuItem       from '@material-ui/core/MenuItem';
import Select         from '@material-ui/core/Select';
import SearchIcon     from '@material-ui/icons/Search';

import styles from './SearchBar.styles';


function SearchBar() {
  const classes = styles();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <>
      <Select 
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
      </Select>
      <Input
        placeholder="Search..."
        disableUnderline={true}
        fullWidth={true}
        classes={{
          input: classes.searchInput,
          root: classes.root,
        }}
      ></Input>
      <Button variant="contained" color="secondary" className={classes.searchButton}>
        <SearchIcon/>
      </Button>
    </>
  );
}

export default SearchBar;
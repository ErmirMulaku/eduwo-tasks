import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { ReactComponent as SearchLogo } from "../../../assets/icons/search.svg";

import "./SearchInput.scss";
interface SearchProps {
  filterCountriesBySearch: (search: string) => void;
}
const SearchInput = (props: SearchProps) => {
  const [state, setState] = useState<{ search: string }>({ search: "" });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, "e.target.value");
    props.filterCountriesBySearch(e.target.value);
    setState({ search: e.target.value });
  };
  return (
    <div className="SearchInput">
      <FormGroup>
        <Input
          className="SearchInput__input"
          value={state.search}
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={(e) => handleOnChange(e)}
        />
        <SearchLogo className="SearchInput__button" />
      </FormGroup>
    </div>
  );
};

export default SearchInput;

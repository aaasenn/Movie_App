import React, {useContext} from "react"
import {SearchContext} from "../App";

const SearchBox = () => {
  const {searchValue, setSearchValue} = useContext(SearchContext)

  return (
    <div className="col col-sm-4">
      <input 
      className="form-control"
      value={searchValue}
      onChange={ (event) => { return setSearchValue(event.target.value)}}
      placeholder="Type" />
    </div>
  )
}

export default SearchBox;
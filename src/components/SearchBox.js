import React from "react"

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input 
      className="form-control"
      value={props.value}
      onChange={ (event) => { return props.setSearchValue(event.target.value)}}
      placeholder="Type" />
    </div>
  )
}

export default SearchBox;
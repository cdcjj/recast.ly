var Search = (props) => {
  // onChange: only fire props.handleSearchInput() after 500ms of change
  var handleSearchInputChange = (e) => {
    if (e.target.value) {
      props.handleSearchInput(e.target.value);
    }
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={handleSearchInputChange}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

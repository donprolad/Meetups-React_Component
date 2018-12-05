import React from "react";
import SEARCH_URL from "../config/connect";
import "./css/Categories.css";
import Item from "./Items";

class Categories extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    categories: [],
    search: []
  };

  componentDidMount = async () => {
    await fetch(SEARCH_URL)
      .then(res => res.json())
      .then(
        data => this.setState({ categories: data.results, isLoaded: true }),
        error => this.setState({ isLoaded: true, error })
      )
      .catch(err => console.err(err));
  };

  addCategory = e => {
    e.preventDefault();
    if (this.state.search.indexOf(e.target.id) !== -1) return;
    else {
      this.setState({
        search: [...this.state.search, e.target.id]
      });
    }
  };

  removeCategory = e => {
    e.preventDefault();
    const backup = [...this.state.search];
    const newState = [...this.state.search];
    newState.splice(e.target.id, 1);
    this.setState({ search: [...newState] });
  };

  render() {
    const { categories, isLoaded, error, search } = this.state;
    if (!isLoaded)
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    else if (error)
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    else {
      return (
        <div>
          <h3>Categories</h3>
          <div className="searchTerms">
            {search.map((searchTerm, index) => {
              return (
                <div
                  className="added"
                  key={index}
                  id={index}
                  onClick={e => this.removeCategory(e)}
                >
                  {console.log(this.state.search)}
                  {searchTerm}
                </div>
              );
            })}
          </div>
          <div className="category">
            {categories.map((category, index) => {
              return (
                <span
                  className="category-item"
                  key={index}
                  id={category.shortname}
                  onClick={e => this.addCategory(e)}
                >
                  {category.shortname}
                </span>
              );
            })}
          </div>
          <button>Search</button>
        </div>
      );
    }
  }
}

export default Categories;

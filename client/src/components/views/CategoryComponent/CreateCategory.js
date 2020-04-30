import React, { useState } from "react";

function CreateCategory(props) {
  const [cat, setCat] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(`new cat is ${cat}`);
  };
  /* onSubmit(e) {
    e.preventDefault();
    const newCategory = {
      category: this.state.category,
    };
    console.log(newCategory);
    axios.post('http://localhost:5000/categories/add', newCategory)
      .then(res => console.log(res.data));


    this.setState({
      category: ''
    })
  }
  */
  return (
    <div>
      <h3>Create New Category</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Enter New Category: </label>
          <input
            type="text"
            value={cat}
            required
            onChange={(e) => setCat(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Category"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateCategory;

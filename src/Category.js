import React from "react"
import { Link } from "react-router-dom"

class Category extends React.Component {
  render() {
    return (
      <div>
        <h2>Categories</h2>
        <ul>
          <Link to="/sport">
            <li>Sports</li>
          </Link>
        </ul>
        <ul>
          <Link to="/entertainment">
            <li>Entertainment</li>
          </Link>
        </ul>
        <ul>
          <Link to="/general">
            <li>General</li>
          </Link>
        </ul>
        <ul>
          <Link to="/health">
            <li>Health</li>
          </Link>
        </ul>
        <ul>
          <Link to="/science">
            <li>Science</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Category

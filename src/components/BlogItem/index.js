// Write your JS code here
import {Component} from 'react'

import './index.css'

class BlogItem extends Component {
  render() {
    const {eachItem} = this.props
    const {title, description, publishedDate} = eachItem
    return (
      <li className="list-item">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{publishedDate}</p>
      </li>
    )
  }
}

export default BlogItem

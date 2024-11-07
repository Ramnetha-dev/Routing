// Write your JS code here
import BlogItem from '../BlogItem/index'

const BlogList = props => {
  const {listOfBlog} = props

  return (
    <diV>
      <ul>
        {listOfBlog.map(eachItem => {
          ;<BlogItem eachItem={eachItem} key={eachItem.id} />
        })}
      </ul>
    </diV>
  )
}

export default BlogList

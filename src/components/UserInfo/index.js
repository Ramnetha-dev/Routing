// Write your JS code here
import './index.css'

const UserInfo = () => {
  return (
    <div className="profile-container">
      <img
        className="profile-image"
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
      />
      <h1 className="name">Wade Warren</h1>
      <p className="role">Software developer at UK</p>
    </div>
  )
}

export default UserInfo

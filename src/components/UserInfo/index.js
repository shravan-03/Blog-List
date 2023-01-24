import {Component} from 'react'
import './index.css'

class UserInfo extends Component {
  render() {
    return (
      <div className="user-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          className="profile-img"
          alt="profile"
        />
        <h1 className="profile-name">Wade Warren</h1>
        <p className="designation">Software developer at UK</p>
      </div>
    )
  }
}
export default UserInfo
